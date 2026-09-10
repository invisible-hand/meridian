"use client";

import { useEffect, useState } from "react";

// Sticky side navigation for a bank page. Rendered only on wide viewports
// (see .bk-toc in shell.tsx); highlights the section in view.

export type TocItem = { id: string; label: string };

export function BankToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => Boolean(e));
    if (!els.length) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.28;
      let current = els[0].id;
      for (const el of els) if (el.getBoundingClientRect().top <= line) current = el.id;
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);
  return (
    <nav className="bk-toc" aria-label="On this page">
      <p className="bk-toc-title">On this page</p>
      <ol>
        {items.map((i) => (
          <li key={i.id} className={i.id === active ? "is-active" : undefined}>
            <a href={`#${i.id}`}>{i.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
