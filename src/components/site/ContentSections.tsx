import { useState, type ReactNode } from "react";
import {
  Users,
  Target,
  Clock,
  LineChart,
  SplitSquareVertical,
  Newspaper,
  FileText,
  CheckCircle2,
  ArrowLeft,
  ExternalLink,
  X,
  Gamepad2,
  Lightbulb,
} from "lucide-react";
import { Reveal, SectionHeading, Accordion } from "./primitives";

export function Intro() {
  return (
    <section className="bg-sky-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title="אפשר להפוך את לימוד הגמרא למסע של הצלחה"
            center
          />
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-muted-foreground md:text-lg">
            תלמידים רבים מגיעים ללימוד הגמרא עם קושי אמיתי: השפה אינה מוכרת, המבנה
            מורכב ולעיתים לא ברור כיצד הדברים קשורים לעולם שלהם. כאשר בונים את
            הלמידה בצורה מדורגת, משלבים עבודה עצמית, יוצרים המחשות ומכניסים חוויה
            — התלמידים יכולים להצליח, להבין ולהרגיש שייכים לעולם הגמרא.
          </p>
        </Reveal>

      </div>
    </section>
  );
}

const stages = [
  {
    num: "01",
    title: "מתכננים",
    subtitle: "תוכנית רב־שנתית ושנתית",
    text: "מגדירים יחד את נקודת הפתיחה, את היעדים ואת הדרך להגיע אליהם.",
    target: "#planning",
  },
  {
    num: "02",
    title: "מלמדים",
    subtitle: "שיעור, דף עבודה והערכה",
    text: "בונים שיעור שתלמיד מתחיל יכול להיכנס אליו ולהצליח.",
    target: "#teaching",
  },
  {
    num: "03",
    title: "מחברים",
    subtitle: "משחוק, חוויה והפעלת תלמידים",
    text: "יוצרים חוויית למידה פעילה שמעודדת הצלחה, התמדה וחיבור.",
    target: "#engagement",
  },
];

export function ThreeStage() {
  return (
    <section className="bg-white py-10 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            title="שלושה שלבים לבניית לימוד גמרא איכותי"
            subtitle="התהליך מתחיל בתכנון מערכתי, ממשיך בבניית הוראה מדויקת ומגיע לחוויית למידה שמפעילה את התלמידים."
            center
          />
        </Reveal>

        <div className="mt-6 grid gap-3 md:mt-12 md:gap-6 md:grid-cols-3">
          {stages.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-brand-border bg-sky-soft p-4 shadow-card md:block md:rounded-3xl md:p-7">
                <span className="text-2xl font-bold leading-none text-teal md:text-4xl">
                  {s.num}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold leading-tight text-navy-deep md:mt-4 md:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-teal">
                    {s.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3 md:text-base">
                    {s.text}
                  </p>
                </div>
                <a
                  href={s.target}
                  className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-navy hover:text-navy-deep md:mt-5 md:inline-flex"
                >
                  לפרטים
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailCard({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Target;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-border bg-white px-4 py-3.5">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0 text-teal" />
        <span className="font-medium text-ink">{label}</span>
      </div>
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}

export function Planning() {
  return (
    <section id="planning" className="bg-sky-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              label="01 · מתכננים"
              title="בונים מסלול לימוד שמתאים באמת לישיבה"
            />
            <p className="mt-5 leading-relaxed text-muted-foreground md:text-lg">
              כל מוסד פוגש תלמידים בנקודת פתיחה אחרת, פועל במסגרת שעות שונה ורוצה
              להגיע ליעדים משלו. תכנון איכותי מתחיל משיחה עם ההנהלה ועם רכז
              המקצוע: איפה אנחנו נמצאים, לאן אנחנו רוצים להגיע ואילו צעדים יעזרו
              לנו להתקדם בצורה מדורגת ומציאותית.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <DetailCard icon={Users} label="מיפוי רמת התלמידים" />
              <DetailCard icon={Target} label="הגדרת יעדים" />
              <DetailCard icon={Clock} label="חלוקת שעות ובחירת תכנים" />
              <DetailCard icon={LineChart} label="בניית תהליך מעקב" />
            </div>
            <a
              href="https://sites.google.com/view/maptoshba/map1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3.5 text-sm font-semibold text-white shadow-card transition-colors hover:bg-navy-deep"
            >
              למפת תכנון רב־שנתית
              <ExternalLink className="h-4 w-4" />
            </a>
            <div className="mt-4">
              <Accordion question="מה כולל תהליך המיפוי?">
                <ul className="list-disc space-y-2 pr-5">
                  <li>שיחת אבחון עם ההנהלה ורכז המקצוע.</li>
                  <li>בדיקת רמת הפתיחה של התלמידים ומאפייני הכיתות.</li>
                  <li>סקירת מסגרת השעות והתכנים הקיימים.</li>
                  <li>זיהוי אתגרים מרכזיים והזדמנויות לשיפור.</li>
                  <li>גיבוש המלצות ראשוניות ויעדים מדורגים.</li>
                </ul>
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Teaching() {
  const [isWorksheetOpen, setIsWorksheetOpen] = useState(false);
  const worksheetDemoUrl = `${import.meta.env.BASE_URL}worksheet-demo.pdf`;

  return (
    <section id="teaching" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeading
              label="02 · מלמדים"
              title="מסתכלים על הסוגיה בעיניים של תלמיד מתחיל"
            />
            <p className="mt-5 leading-relaxed text-muted-foreground md:text-lg">
              הוראת גמרא איכותית מתחילה בשאלה פשוטה: מה התלמיד רואה כשהוא פוגש את
              הסוגיה בפעם הראשונה? מפרקים את הלימוד לחלקים ברורים ומאפשרים לתלמיד
              להבין כל שלב לפני שעוברים לשלב הבא.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <DetailCard icon={SplitSquareVertical} label="פירוק הסוגיה" />
              <DetailCard icon={Newspaper} label="אקטואליזציה" />
              <DetailCard icon={FileText} label="דף עבודה מדורג">
                <button
                  type="button"
                  onClick={() => setIsWorksheetOpen(true)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-sky px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-brand-border focus-visible:outline-teal"
                >
                  צפיה בדוגמא
                </button>
              </DetailCard>
              <DetailCard icon={CheckCircle2} label="הערכה מדויקת" />
            </div>
            <div className="mt-4">
              <Accordion question="איך בונים שיעור מדורג?">
                <ul className="list-disc space-y-2 pr-5">
                  <li>פתיחה שמחברת את התלמיד לשאלה המרכזית של הסוגיה.</li>
                  <li>חלוקת הטקסט לקטעים קצרים וברורים.</li>
                  <li>שלבי הבנה הדרגתיים: מילים, מבנה ומשמעות.</li>
                  <li>עבודה עצמית מודרכת בדף עבודה מדורג.</li>
                  <li>סיכום והערכה שמאפשרים לתלמיד להרגיש הצלחה.</li>
                </ul>
              </Accordion>
            </div>
          </Reveal>
        </div>
      </div>
      {isWorksheetOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/70 p-3 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="צפיה בדוגמא לדף עבודה"
        >
          <div className="flex h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-soft md:h-[88vh] md:rounded-3xl">
            <div className="flex items-center justify-between gap-3 border-b border-brand-border px-4 py-3 md:px-5">
              <div>
                <h3 className="text-base font-bold text-navy-deep md:text-lg">
                  דף עבודה מדורג לדוגמה
                </h3>
                <p className="text-xs text-muted-foreground md:text-sm">
                  ניתן לגלול, להגדיל או לפתוח בלשונית חדשה.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={worksheetDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border text-navy transition-colors hover:bg-sky-soft"
                  aria-label="פתיחה בלשונית חדשה"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsWorksheetOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white transition-colors hover:bg-navy-deep"
                  aria-label="סגירת חלון"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <iframe
              src={worksheetDemoUrl}
              title="דף עבודה מדורג לדוגמה"
              className="min-h-0 flex-1 bg-sky-soft"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

const engagementCards = [
  {
    icon: Lightbulb,
    title: "יוזמות, מבצעים ותוצרי תלמידים",
    text: "מבצעי לימוד, תחרויות ידידותיות ותוצרים שהתלמידים יוצרים בעצמם — מעודדים מעורבות, גאווה ותחושת שייכות לעולם הגמרא.",
  },
  {
    icon: Gamepad2,
    title: "משחקים דיגיטליים מותאמים",
    text: "כלים אינטראקטיביים שמתורגמים ישירות לתוכן הנלמד, מחזקים בקיאות ומיומנויות ומכניסים אנרגיה חיובית ללמידה.",
  },
];

export function Engagement() {
  return (
    <section id="engagement" className="bg-sky-soft py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <SectionHeading
            label="03 · מחברים"
            title="יוצרים חוויית למידה שמפעילה את התלמידים"
          />
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground md:text-lg">
            לצד לימוד רציני ומעמיק, אפשר לשלב חוויות שמכניסות אנרגיה, מוטיבציה
            ותחושת מסוגלות.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {engagementCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-brand-border bg-white p-8 shadow-card transition-shadow hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-soft text-orange">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-deep">
                  {c.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
