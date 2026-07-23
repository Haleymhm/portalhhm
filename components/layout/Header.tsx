"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    const ids = navigation
      .map((n) => n.href)
      .filter((h) => h.startsWith("#") && h !== "#");
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive("#" + visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="header"
      className={`header dark-background fixed inset-y-0 left-0 z-50 flex w-full max-w-[300px] flex-col bg-sidebar text-white transition-transform duration-300 ease-out xl:translate-x-0 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
        className="header-toggle xl:hidden absolute right-[-42px] top-3 z-50 flex h-10 w-10 items-center justify-center bg-[var(--accent)] text-white"
      >
        <i className={`bi ${open ? "bi-x" : "bi-list"} text-2xl`} />
      </button>

      <div className="profile-img mt-12 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.profileImage}
          alt={profile.name}
          className="h-32 w-32 rounded-full object-cover ring-4 ring-white/10"
        />
      </div>

      <Link
        href="/"
        className="logo flex items-center justify-center py-4 text-center"
      >
        <h1 className="sitename text-2xl font-bold tracking-wide">
          {profile.name}
        </h1>
      </Link>

      <div className="social-links my-3 flex justify-center gap-3 text-center">
        {profile.social.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className={`text-sidebar-text hover:text-white transition-colors`}
            aria-label={s.name}
          >
            <i className={`bi ${s.icon} text-xl`} />
          </a>
        ))}
      </div>

      <nav id="navmenu" className="navmenu mt-2 w-full overflow-y-auto px-3">
        <ul className="space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              active={active}
              onSelect={() => setOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavLink({
  item,
  active,
  onSelect,
}: {
  item: import("@/data/navigation").NavItem;
  active: string;
  onSelect: () => void;
}) {
  const [childOpen, setChildOpen] = useState(false);
  const isActive = active === item.href && item.href !== "#";
  const hasChildren = !!item.children?.length;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setChildOpen((v) => !v);
      return;
    }
    onSelect();
  };

  const linkClass = `flex items-center gap-3 rounded px-3 py-2 text-sm text-sidebar-text transition-colors hover:text-white hover:bg-white/5 ${
    isActive && !hasChildren ? "text-white bg-white/5" : ""
  }`;

  return (
    <li>
      <a
        href={item.href}
        onClick={handleClick}
        className={linkClass}
      >
        {item.icon && <i className={`bi ${item.icon}`} />}
        <span>{item.label}</span>
        {hasChildren && (
          <i
            className={`bi bi-chevron-down ml-auto transition-transform ${
              childOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </a>
      {hasChildren && childOpen && (
        <ul className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
          {item.children!.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="block rounded px-3 py-2 text-sm text-sidebar-text hover:text-white"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
