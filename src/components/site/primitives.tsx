import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  center = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {label && (
        <span
          className={`inline-block text-sm font-semibold tracking-wide ${
            light ? "text-teal" : "text-teal"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-sky/90" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:brightness-105 hover:shadow-soft active:scale-[0.98]"
    >
      {children}
    </a>
  );
}

export function GhostButton({
  href,
  children,
  variant = "navy",
}: {
  href: string;
  children: ReactNode;
  variant?: "navy" | "light";
}) {
  const styles =
    variant === "light"
      ? "border-white/40 text-white hover:bg-white/10"
      : "border-brand-border text-navy hover:bg-sky-soft";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-base font-semibold transition-all active:scale-[0.98] ${styles}`}
    >
      {children}
    </a>
  );
}

export function Accordion({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-brand-border bg-white overflow-hidden">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right text-lg font-semibold text-navy-deep"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-teal transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-muted-foreground leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
