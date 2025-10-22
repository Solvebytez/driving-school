import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { RichmondHillPackagesSection } from "@/components/site/richmond-hill/richmond-hill-packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";

export default function RichmondHillPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Driving Packages In Richmond Hill"
        rightText="Home - Driving Packages in Richmond Hill"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <RichmondHillPackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}


