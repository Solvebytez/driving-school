import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { NewmarketPackagesSection } from "@/components/site/newmarket/newmarket-packages-section";
import { PrivateLessonsSection } from "@/components/site/homepage/private-lessons-section";

export default function NewmarketPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Driving Packages In Newmarket"
        rightText="Home - Driving Packages in Newmarket"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <NewmarketPackagesSection />
      <PrivateLessonsSection />
    </main>
  );
}


