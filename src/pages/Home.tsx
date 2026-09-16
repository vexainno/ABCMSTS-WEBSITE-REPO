import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import WhyABCMSTS from "@/components/home/WhyABCMSTS";
import AcademicsOverview from "@/components/home/AcademicsOverview";
import StudentLife from "@/components/home/StudentLife";
import Achievements from "@/components/home/Achievements";
import Testimonial from "@/components/home/Testimonial";
import Newsletter from "@/components/home/Newsletter";
import CTASection from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhyABCMSTS />
      <AcademicsOverview />
      <StudentLife />
      <Achievements />
      <Testimonial />
      <CTASection
        title="Ready to Begin Your Journey?"
        description="Take the first step toward an exceptional education. Learn about our admissions process or reach out to our team."
        primaryButton={{ label: "Admissions Information", to: "/admissions" }}
        secondaryButton={{ label: "Contact the School", to: "/contact" }}
      />
      <Newsletter />
    </>
  );
}
