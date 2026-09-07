import { Emblem50 } from "./Emblem50";

const links = [
  { href: "#play", label: "DRINK·EAT·PLAY" },
  { href: "#wear", label: "FIT CHECK" },
  { href: "#dink-or-drink", label: "DINK OR DRINK" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-acid">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <a href="#top" className="flex items-center gap-3">
          <Emblem50 className="size-10 bg-pink" />
          <span className="font-display text-sm leading-none text-ink sm:text-base">
            DINK OR DRINK
          </span>
        </a>
        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.14em] text-ink/75 transition hover:text-pink-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#rsvp"
          className="border-[3px] border-ink bg-ink px-4 py-2 font-display text-xs text-acid shadow-[3px_3px_0_var(--pink)] transition-transform hover:-translate-y-0.5"
        >
          RSVP
        </a>
      </div>
    </header>
  );
}
