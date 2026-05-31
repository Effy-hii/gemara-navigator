import { MessageCircle, Phone, Target, BookOpen, Sparkles } from "lucide-react";
import { contact } from "@/lib/site-data";

const pillars = [
  { icon: Target, label: "תכנון מדויק" },
  { icon: BookOpen, label: "הוראה בהירה" },
  { icon: Sparkles, label: "חוויה שמחברת תלמידים" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden gradient-brand pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Soft abstract shapes */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute top-20 -right-20 h-80 w-80 rounded-full bg-teal/10" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-white/5" />

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
