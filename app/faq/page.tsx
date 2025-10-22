import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { FAQSection } from "@/components/site/faq/faq-section";

export default function FAQPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Frequently Asked Questions"
        rightText="Home - FAQ"
        backgroundImage="/road-safety-driving-guide.jpg"
      />
      <FAQSection />
    </main>
  );
}


