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
      className="relative overflow-hidden bg-navy-deep pt-24 pb-12 md:pt-32 md:pb-20"
    >
      <img
        src={brandAssets.heroTexture}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div className="absolute inset-0 bg-navy-deep/82" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy/70 to-navy-deep/95 md:bg-gradient-to-l md:from-navy-deep/82 md:via-navy/72 md:to-navy-deep/88" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[0.92fr_1fr] lg:grid-rows-[auto_auto] lg:items-center">
        <div className="text-center lg:col-start-1 lg:row-start-1 lg:text-right">
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-sky">
            ליווי והדרכה בהוראת גמרא
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            לימוד גמרא יכול להיראות אחרת
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky/95 md:text-xl lg:mx-0">
            לימוד גמרא יכול להפוך לאתגר בהיר, מדורג ומעורר חיבור - כאשר
            בונים אותו נכון.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-sky/80 lg:mx-0">
            ליווי מקצועי לישיבות תיכוניות ולרשתות חינוך בבניית לימוד גמרא
            מסודר, בהיר ומחבר: מהתוכנית הרב-שנתית, דרך השיעור ודף העבודה,
            ועד חוויות למידה ומשחקים דיגיטליים.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 lg:mx-0 lg:justify-start">
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
        </div>

        <div className="mx-auto w-full max-w-xl lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-soft backdrop-blur-sm md:rounded-3xl md:p-3">
            <img
              src={brandAssets.heroImage}
              alt="תלמידים לומדים גמרא בעזרת משחק דיגיטלי"
              className="aspect-[16/10] w-full rounded-xl object-cover object-center md:rounded-2xl"
            />
          </div>
        </div>

        <div className="text-center lg:col-start-1 lg:row-start-2 lg:text-right">
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
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
      </div>
    </section>
  );
}
