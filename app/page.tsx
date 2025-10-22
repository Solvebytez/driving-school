import { Hero } from "@/components/site/homepage/hero";
import { ServicesSection } from "@/components/site/homepage/services-section";
import { LearningOptionsSection } from "@/components/site/homepage/learning-options-section";
import { AboutUsSection } from "@/components/site/homepage/about-us-section";
import { FeaturesSection } from "@/components/site/homepage/features-section";
import { CoursesSection } from "@/components/site/homepage/courses-section";
import { PackagesSection } from "@/components/site/homepage/packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";

export default function Page() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <LearningOptionsSection />
      <FeaturesSection />
      <CoursesSection />
      <AboutUsSection />
      <PackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}
