import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Intro,
  ThreeStage,
  Planning,
  Teaching,
  Engagement,
} from "@/components/site/ContentSections";
import { GamesLibrary, Tools } from "@/components/site/ShowcaseSections";
import {
  Services,
  About,
  FinalCTA,
  Footer,
} from "@/components/site/ClosingSections";

const TITLE = "לימוד גמרא יכול להיראות אחרת | הרב אפרים שרם";
const DESCRIPTION =
  "ליווי והדרכה לישיבות תיכוניות בבניית לימוד גמרא ברור, עמוק ומחבר: תוכניות לימודים, הכשרת מורים, דפי עבודה, משחוק וכלים דיגיטליים.";

// TODO: add og:image when final brand image is available.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <ThreeStage />
        <Planning />
        <Teaching />
        <Engagement />
        <GamesLibrary />
        <Tools />
        <Services />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
