import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { CoursesSection } from "@/components/site/courses/courses-section";

export default function CoursesPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Driving Courses"
        rightText="Home - Courses"
        backgroundImage="/professional-instructor-training-in-car.jpg"
      />
      <CoursesSection />
    </main>
  );
}
