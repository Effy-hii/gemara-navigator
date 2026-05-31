import { MessageCircle, Phone, Target, BookOpen, Sparkles } from "lucide-react";
import { brandAssets, contact } from "@/lib/site-data";

const pillars = [
  { icon: Target, label: "תכנון מדויק" },
  { icon: BookOpen, label: "הוראה בהירה" },
  { icon: Sparkles, label: "חוויה שמחברת תלמידים" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] overflow-hidden bg-navy-deep pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <img
        src={brandAssets.heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy-deep/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/65 via-navy/55 to-navy-deep/85" />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-sky">
          ליווי והדרכה בהוראת גמרא
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          לימוד גמרא יכול להיראות אחרת
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-sky/95 md:text-xl">
          לימוד גמרא יכול להפוך לאתגר בהיר, מדורג ומעורר חיבור — כאשר בונים אותו
          נכון.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sky/80">
          ליווי מקצועי לישיבות תיכוניות ולרשתות חינוך בבניית לימוד גמרא מסודר,
          בהיר ומחבר: מהתוכנית הרב־שנתית, דרך השיעור ודף העבודה, ועד חוויות למידה
          ומשחקים דיגיטליים.
        </p>

        {/* Pillars */}
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              <p.icon className="h-4 w-4 text-teal" />
              {p.label}
            </div>
          ))}
        </div>

        {/* CTAs */}
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
          הרב אפרים שרם · ליווי והדרכה בהוראת גמרא
        </p>
      </div>
    </section>
  );
}
