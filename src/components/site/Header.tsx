import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { brandAssets, contact, navLinks } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md border-b border-brand-border/70">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src={brandAssets.logo}
              alt="חוויה בלמידה — הרב אפרים שרם"
              className="h-10 w-10 rounded-lg object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-sky-soft hover:text-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block shrink-0">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-navy-deep"
            >
              <MessageCircle className="h-4 w-4" />
              לתיאום שיחת מיפוי
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border text-navy-deep"
            aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden border-t border-brand-border bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/90 transition-colors hover:bg-sky-soft"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-4 py-3 text-base font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                לתיאום שיחת מיפוי
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
