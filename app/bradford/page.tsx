import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { BradfordPackagesSection } from "@/components/site/bradford/bradford-packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";

export default function BradfordPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Driving Packages In Bradford"
        rightText="Home - Driving Packages in Bradford"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <BradfordPackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}
