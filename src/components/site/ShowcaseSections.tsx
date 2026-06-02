import { ExternalLink, MessageCircle, Globe } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { games, contact } from "@/lib/site-data";
import toolHakodesh from "@/assets/tool-hakodesh.png";
import toolPoteach from "@/assets/tool-poteach.png";

export function GamesLibrary() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title="משחקים שכבר נבנו"
            subtitle="ארבע דוגמאות לכלים דיגיטליים שמשרתים מטרות לימודיות שונות."
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {games.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <a
                href={g.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative h-44 overflow-hidden bg-sky-soft">
                  <img
                    src={g.image}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/25 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-navy-deep">{g.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {g.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-sky px-3 py-1 text-xs font-medium text-navy"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal group-hover:text-navy">
                    לפתיחת המשחק
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Highlighted CTA card */}
        <Reveal delay={120}>
          <div className="mt-10 rounded-3xl border border-orange/30 bg-orange-soft p-8 text-center md:p-10">
            <h3 className="text-2xl font-bold text-navy-deep">
              צריכים משחק מותאם לבית הספר?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              אפשר לבנות משחק דיגיטלי מותאם לתוכן הנלמד, לרמת התלמידים ולזהות
              החזותית של המוסד.
            </p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 text-base font-semibold text-white shadow-card transition-all hover:brightness-105"
            >
              <MessageCircle className="h-5 w-5" />
              בואו נדבר על הצרכים שלכם
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const tools = [
  {
    title: "פותח שערים",
    text: "אתר מקצועי בגמרא הכולל חומרי עזר וכלים למורים ולתלמידים.",
    link: "https://toshba.net/",
    image: toolPoteach,
  },
  {
    title: "הקודש במרכז",
    text: "אתר מקצועי המרכז חומרי לימוד ותכנים בתחומי התושב״ע.",
    link: "https://hatene.net/disciplines",
    image: toolHakodesh,
  },
];

export function Tools() {
  return (
    <section className="bg-sky-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title="כלים מקצועיים שפיתח הרב אפרים שרם"
            subtitle="דוגמאות לאתרים ולכלים שמסייעים למורים ולתלמידים בעולם הגמרא והתושב״ע."
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tools.map((t, i) => (
            <Reveal key={t.title} delay={i * 120}>
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-border bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
                <div className="relative h-56 overflow-hidden bg-white px-3 py-4">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-navy">
                  <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-deep">
                  {t.title}
                    </h3>
                  </div>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
                <a
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-xl border border-brand-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-sky-soft"
                >
                  לביקור באתר
                  <ExternalLink className="h-4 w-4" />
                </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
