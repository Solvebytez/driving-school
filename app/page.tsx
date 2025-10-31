import { Hero } from "@/components/site/homepage/hero";
import { ServicesSection } from "@/components/site/homepage/services-section";
import { AboutUsSection } from "@/components/site/homepage/about-us-section";
import { FeaturesSection } from "@/components/site/homepage/features-section";
import { AdvancedCourseSection } from "@/components/site/homepage/advanced-course-section";
import { PackagesSection } from "@/components/site/homepage/packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";
import { HighlightsSection } from "@/components/site/homepage/highlights-section";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <HighlightsSection />
      <ServicesSection />
      <FeaturesSection />
      <AdvancedCourseSection />
      <PackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}
