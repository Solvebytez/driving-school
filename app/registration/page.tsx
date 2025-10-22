import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { RegistrationFormSection } from "@/components/site/registration/registration-form-section";

export default function RegistrationPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Student Registration"
        rightText="Home - Registration"
        backgroundImage="/modern-car-interior-driving.jpg"
      />
      <RegistrationFormSection />
    </main>
  );
}


