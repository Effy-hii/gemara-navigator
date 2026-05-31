import logo from "@/assets/logo.jpg";
import heroStudents from "@/assets/hero-students.png";
import gameDuel from "@/assets/game-duel.jpg";
import gameEscape from "@/assets/game-escape.jpg";
import gameMishnah from "@/assets/game-mishnah.jpg";
import gameRashi from "@/assets/game-rashi.png";

// TODO: replace temporary JPG logo with final transparent PNG or SVG asset.
export const brandAssets = {
  logo,
  heroImage: heroStudents,
  profileImage: "",
};

export const contact = {
  name: "הרב אפרים שרם",
  title: "מדריך מחוזי בתושב״ע ויוצר בבינה מלאכותית",
  phoneDisplay: "053-622-8498",
  phoneLink: "tel:0536228498",
  whatsapp: "https://wa.me/972536228498",
};

export const navLinks = [
  { label: "ראשי", href: "#home" },
  { label: "מתכננים", href: "#planning" },
  { label: "מלמדים", href: "#teaching" },
  { label: "מחברים", href: "#engagement" },
  { label: "מסלולי ליווי", href: "#services" },
  { label: "אודות", href: "#about" },
  { label: "יצירת קשר", href: "#contact" },
];

export const games = [
  {
    title: "אבני אשקלון — חדר בריחה תלמודי",
    description:
      "מסע חידות כיתתי בעקבות סוגיית כיבוד אב ואם במסכת קידושין.",
    tags: ["סיכום סוגיה", "פתרון חידות", "למידה כיתתית"],
    link: "https://effy-hii.github.io/escapecheckgemara/",
    image: gameEscape,
  },
  {
    title: "דו־קרב מילות מפתח בארמית",
    description:
      "משחק תחרותי בין קבוצות לתרגול מונחי דיון ושלבי הסוגיה.",
    tags: ["מילות מפתח", "מבנה הסוגיה", "תחרות קבוצתית"],
    link: "https://effy-hii.github.io/trivaiagmara/",
    image: gameDuel,
  },
  {
    title: "מסדרים את המשנה",
    description:
      "משחק מיון אינטראקטיבי להיכרות עם מסכתות הש״ס וששת סדרי המשנה.",
    tags: ["בקיאות בסיסית", "ששת הסדרים", "משחק מיון"],
    link: "https://effy-hii.github.io/masechetmatch/",
    image: gameMishnah,
  },
  {
    title: "בלש רש״י",
    description:
      "משחק מדורג לפיתוח שליטה בקריאת כתב רש״י ולחיזוק ביטחון הלומדים.",
    tags: ["כתב רש״י", "שטף קריאה", "תרגול מדורג"],
    link: "https://effy-hii.github.io/ktavrashi/",
    image: gameRashi,
  },
];
