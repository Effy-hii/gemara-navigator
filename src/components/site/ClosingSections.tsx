import {
  MessageCircle,
  Phone,
  UserRound,
  CalendarRange,
  Wrench,
  BookOpenCheck,
  Users,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { contact, brandAssets } from "@/lib/site-data";

const services = [
  {
    icon: UserRound,
    title: "ייעוץ חד־פעמי",
    text: "מפגש ממוקד עם הנהלה ורכז מקצוע לצורך מיפוי מצב קיים, בירור אתגרים והגדרת צעדים מעשיים להמשך.",
  },
  {
    icon: CalendarRange,
    title: "ליווי שנתי",
    text: "תהליך עומק הכולל בניית תוכנית רב־שנתית ושנתית, ליווי הצוות, הדרכות לאורך השנה והתאמת חומרי למידה.",
    badge: "מסלול מקיף",
  },
  {
    icon: Wrench,
    title: "בניית תוצר מותאם",
    text: "בניית כלי נקודתי לפי צורכי המוסד: משחק מקוון, חדר בריחה, מערך שיעור, דף עבודה, מבחן, אינפוגרפיקה או תרשים סוגיה.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title="איך אפשר לעבוד יחד?"
            subtitle="כל מוסד יכול לבחור את המסלול המתאים לצורך שלו — מפגישה ממוקדת ועד תהליך שנתי מלא."
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border bg-white p-7 shadow-card ${
                  s.badge ? "border-orange/40" : "border-brand-border"
                }`}
              >
                {s.badge && (
                  <span className="absolute -top-3 left-7 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
                    {s.badge}
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky text-navy">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
                >
                  <MessageCircle className="h-4 w-4" />
                  בואו נדבר על הצרכים שלכם
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-base text-muted-foreground">
            מעדיפים לדבר? התקשרו:{" "}
            <a
              href={contact.phoneLink}
              className="font-semibold text-navy ltr-num hover:text-navy-deep"
            >
              {contact.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const aboutCards = [
  { icon: BookOpenCheck, label: "הדרכות בתושב״ע וגמרא" },
  { icon: Users, label: "ליווי צוותי הוראה" },
  { icon: Sparkles, label: "הטמעה חינוכית של כלים דיגיטליים ובינה מלאכותית" },
];

export function About() {
  return (
    <section id="about" className="bg-sky-soft py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <Reveal>
          <div className="rounded-3xl border border-brand-border bg-white p-8 shadow-card md:p-12">
            {/* Future optional profile image — rendered only when provided */}
            {brandAssets.profileImage && (
              <img
                src={brandAssets.profileImage}
                alt={contact.name}
                className="mb-6 h-24 w-24 rounded-2xl object-cover"
              />
            )}
            <span className="text-sm font-semibold text-teal">נעים להכיר</span>
            <h2 className="mt-2 text-3xl font-bold text-navy-deep md:text-4xl">
              {contact.name}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground md:text-lg">
              מלווה מורים ומוסדות בבניית לימוד גמרא מסודר, בהיר וחווייתי. לצד
              ההדרכה בתושב״ע, משלב בפיתוח חומרי הלמידה גם כלים דיגיטליים ויכולות
              בינה מלאכותית כאשר הם משרתים צורך פדגוגי אמיתי.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutCards.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-3 rounded-2xl border border-brand-border bg-sky-soft p-5"
                >
                  <c.icon className="h-6 w-6 text-teal" />
                  <span className="text-sm font-medium text-ink">{c.label}</span>
                </div>
              ))}
            </div>

            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" />
              לתיאום שיחת היכרות
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden gradient-brand py-20 md:py-28">
      <div className="pointer-events-none absolute -top-16 right-1/4 h-64 w-64 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute bottom-0 -left-16 h-72 w-72 rounded-full bg-teal/10" />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            רוצים לבנות אצלכם לימוד גמרא ברור, עמוק ומחבר יותר?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-sky/90">
            אפשר להתחיל בשיחת מיפוי קצרה, להבין את הצרכים של הישיבה ולחשוב יחד על
            הצעד המתאים ביותר.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-base font-semibold text-white shadow-card transition-all hover:brightness-105 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              שלחו הודעה לתיאום שיחה
            </a>
            <a
              href={contact.phoneLink}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              התקשרו עכשיו
            </a>
          </div>
          <p className="mt-6 text-sm text-sky/70">
            הרב אפרים שרם ·{" "}
            <span className="ltr-num">{contact.phoneDisplay}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-right">
          <div className="flex items-center gap-3">
            <img
              src={brandAssets.logo}
              alt="חוויה בלמידה — הרב אפרים שרם"
              className="h-12 w-12 rounded-lg object-contain bg-white/95 p-1"
            />
            <div>
              <p className="font-serif text-lg font-bold">{contact.name}</p>
              <p className="text-sm text-sky/70">
                ליווי, הדרכה ובניית חומרי למידה בהוראת גמרא
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.phoneLink}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              <span className="ltr-num">{contact.phoneDisplay}</span>
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal px-4 py-2.5 text-sm font-semibold transition-colors hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
              וואטסאפ
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-sky/60">
          © {new Date().getFullYear()} {contact.name}
        </p>
      </div>
    </footer>
  );
}
