import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { ADMISSION_STEPS, ADMISSION_INFO, ADMISSIONS_IMAGE } from "@/lib/data";

export default function Admissions() {
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Choosing the right school is important and we are excited that you are considering Alexander B. Cummings Model Science and Technology School."
        image={ADMISSIONS_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How to Apply"
            title="Our Admissions Process"
            description="Before you begin your application, please read the information about our admissions process below."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADMISSION_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 left-8 flex items-center justify-center w-10 h-10 rounded-full bg-white text-red-900 font-bold text-lg shadow-md">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-red-900 mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Information"
            title="Admission at a Glance"
            description="Important details about eligibility, requirements, and the admissions process."
          />

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-200">
              {ADMISSION_INFO.map((info, index) => (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row gap-2 sm:gap-6 p-6 ${
                    index % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                  }`}
                >
                  <div className="sm:w-1/3 font-semibold text-red-900 text-sm uppercase tracking-wide">
                    {info.label}
                  </div>
                  <div className="sm:w-2/3 text-gray-600">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-red-900">Note:</span>{" "}
              Admission is available for students entering grades 7 through 10.
              Admission to grades 11 or 12 is only considered under
              extenuating circumstances.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions About Admissions?"
        description="Our team is ready to help you through every step of the process. Reach out and we'll be happy to assist."
        primaryButton={{ label: "Contact the School", to: "/contact" }}
        secondaryButton={{ label: "Explore Academics", to: "/academics" }}
      />
    </>
  );
}
