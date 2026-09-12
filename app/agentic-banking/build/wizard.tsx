"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Answers } from "@/lib/build";
import { QUESTIONS, USE_CASE_BRIEFS, answersToQuery, decide, defaultAnswers } from "@/lib/build";
import { USE_CASES, type UseCase } from "@/lib/regulators";
import { BriefView, briefToText, type Lookups } from "./brief";
import { PatternMap } from "./figures";

// The interactive half of the build map. State lives in the URL so a brief
// can be shared inside a bank; the figures animate as answers change.

function fromQuery(search: string, lookups: Lookups): Answers | null {
  const p = new URLSearchParams(search);
  const use = p.get("use") as UseCase | null;
  if (!use || !USE_CASES.includes(use)) return null;
  const a = defaultAnswers(use);
  for (const q of QUESTIONS) {
    const v = p.get(q.key);
    if (v && q.options.some((o) => o.value === v)) (a as unknown as Record<string, string>)[q.key] = v;
  }
  const bank = p.get("bank");
  if (bank && lookups.banks.some((b) => b.slug === bank)) a.bank = bank;
  return a;
}

export function BuildWizard({ lookups }: { lookups: Lookups }) {
  const [answers, setAnswers] = useState<Answers>(() => defaultAnswers("customer-chatbots"));
  const [copied, setCopied] = useState<string | null>(null);

  // Adopt the URL's answers after hydration (the server cannot see the query
  // string on a static page, so the first paint shows the default use case).
  useEffect(() => {
    const fromUrl = fromQuery(window.location.search, lookups);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- URL-derived initial state
    if (fromUrl) setAnswers(fromUrl);
  }, [lookups]);

  useEffect(() => {
    const url = `${window.location.pathname}?${answersToQuery(answers)}`;
    window.history.replaceState(null, "", url);
  }, [answers]);

  const brief = useMemo(() => decide(answers), [answers]);
  const content = USE_CASE_BRIEFS[answers.useCase];
  const set = (key: string, value: string) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const copy = async (what: "text" | "link") => {
    try {
      const value = what === "text" ? briefToText(brief, lookups, content.decomposition, content.pitfalls) : window.location.href;
      await navigator.clipboard.writeText(value);
      setCopied(what);
      setTimeout(() => setCopied(null), 1800);
    } catch {}
  };

  return (
    <>
      <div className="bd-wrap">
        <div>
          <div className="bd-q">
            <p className="bd-q-k">01 · The use case</p>
            <p className="bd-q-t">What is the system for?</p>
            <div className="bd-use">
              {USE_CASES.map((u) => (
                <button key={u} type="button" className="bd-opt" aria-pressed={answers.useCase === u} onClick={() => setAnswers({ ...defaultAnswers(u), bank: answers.bank })}>
                  {lookups.useCaseLabels[u]}
                </button>
              ))}
            </div>
            <p className="bd-hint">{content.what.charAt(0).toUpperCase() + content.what.slice(1)}. Picking a use case loads its typical answers; change any of them below.</p>
          </div>

          {QUESTIONS.map((q, i) => {
            const current = q.options.find((o) => o.value === answers[q.key]);
            return (
              <div className="bd-q" key={q.key}>
                <p className="bd-q-k">{String(i + 2).padStart(2, "0")} · {q.label}</p>
                <p className="bd-q-t">{q.question}</p>
                <div className="bd-opts">
                  {q.options.map((o) => (
                    <button key={o.value} type="button" className="bd-opt" aria-pressed={answers[q.key] === o.value} onClick={() => set(q.key, o.value)}>{o.label}</button>
                  ))}
                </div>
                <p className="bd-hint">{current?.hint}</p>
              </div>
            );
          })}

          <div className="bd-q">
            <p className="bd-q-k">10 · Your bank (optional)</p>
            <p className="bd-q-t">Which bank is this for?</p>
            <select className="bd-select" value={answers.bank ?? ""} onChange={(e) => setAnswers({ ...answers, bank: e.target.value || undefined })} aria-label="Your bank">
              <option value="">Not one of the 100 largest US banks, or prefer not to say</option>
              {lookups.banks.map((b) => <option key={b.slug} value={b.slug}>{b.shortName}</option>)}
            </select>
            <p className="bd-hint">Adds the bank&apos;s regulators and its AI record to the brief.</p>
          </div>
        </div>

        <div className="bd-sticky">
          <div className="bd-fig">
            <PatternMap pattern={brief.pattern} tier={brief.tier} />
            <p className="bd-cap">The pattern moves as you answer. Predictability against model autonomy, after public engineering guidance on agents.</p>
          </div>
          <div className="bd-actions" style={{ marginTop: 14 }}>
            <button type="button" className="bd-btn" onClick={() => copy("text")}>{copied === "text" ? "copied" : "copy brief as text"}</button>
            <button type="button" className="bd-btn" onClick={() => copy("link")}>{copied === "link" ? "copied" : "copy link to this brief"}</button>
            <Link className="bd-btn" href={`/agentic-banking/build/${answers.useCase}`}>the standard brief →</Link>
          </div>
        </div>
      </div>

      <BriefView key={JSON.stringify(answers)} brief={brief} lookups={lookups} decomposition={content.decomposition} pitfalls={content.pitfalls} />
    </>
  );
}
