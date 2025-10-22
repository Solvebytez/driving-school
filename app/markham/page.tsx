import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { MarkhamPackagesSection } from "@/components/site/markham/markham-packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";

export default function MarkhamPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Driving Packages In Markham"
        rightText="Home - Driving Packages in Markham"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <MarkhamPackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}


