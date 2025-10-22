import { BreadcrumbHero } from "@/components/site/common/breadcrumb-hero";
import { CertificationFormSection } from "@/components/site/certification/certification-form-section";

export default function CheckCertificationPage() {
  return (
    <main>
      <BreadcrumbHero
        leftText="Check Certification"
        rightText="Home - Check Certification"
        backgroundImage="/driving-license-certificate.jpg"
      />
      <CertificationFormSection />
    </main>
  );
}

