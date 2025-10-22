import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { ScarboroughPackagesSection } from "@/components/site/scarborough/scarborough-packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";

export default function ScarboroughPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Driving Packages In Scarborough"
        rightText="Home - Driving Packages in Scarborough"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <ScarboroughPackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}


