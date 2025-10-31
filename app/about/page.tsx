import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { AboutUsSection } from "@/components/site/about/about-us-section";
import { OurStorySection } from "@/components/site/about/our-story-section";
import { ValuesSection } from "@/components/site/about/values-section";

export default function AboutPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="About Driving Hero"
        rightText="Home - About Us"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <AboutUsSection />
      <OurStorySection />
      <ValuesSection />
    </main>
  );
}
