import { Target, Eye, Building2, MapPin, User } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { HISTORY_TIMELINE, CAMPUS_IMAGE, ABOUT_IMAGE } from "@/lib/data";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Our School"
        subtitle="A model institution for science and technology education, built through corporate social responsibility and community partnership."
        image={ABOUT_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-red-700 mb-3">
                Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 leading-tight">
                Built Through Partnership and Purpose
              </h2>
              <div className="mt-6 space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  The Liberian Coca-Cola Bottling Company constructed the
                  Alexander B. Cummings Model Science and Technology School in
                  2015 as part of its corporate social responsibility initiative.
                </p>
                <p>
                  The school was constructed in the Du-Port Road Community on
                  land donated by Hon. Leticia Reeves, former Mayor of the
                  Paynesville City Corporation.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <Building2 className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900 text-sm">
                      Built By
                    </div>
                    <div className="text-sm text-gray-600">
                      Liberian Coca-Cola Bottling Company
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <MapPin className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900 text-sm">
                      Location
                    </div>
                    <div className="text-sm text-gray-600">
                      Du-Port Road Community, Paynesville
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <User className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900 text-sm">
                      Land Donated By
                    </div>
                    <div className="text-sm text-gray-600">
                      Hon. Leticia Reeves, former Mayor of Paynesville City Corporation
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                  <Target className="w-6 h-6 text-red-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-red-900 text-sm">
                      Established
                    </div>
                    <div className="text-sm text-gray-600">
                      2015
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={CAMPUS_IMAGE}
                alt="School campus"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Journey"
            title="A Timeline of Excellence"
            description="From its founding to today, ABCMSTS has grown into a model institution for science and technology education in Liberia."
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

            <div className="space-y-12">
              {HISTORY_TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-white shadow-md md:-translate-x-1/2 z-10 mt-1" />

                  <div className="md:w-1/2 pl-20 md:pl-0 md:px-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="text-red-700 font-bold text-sm mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900 rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-red-100 leading-relaxed text-lg">
                  To be a leading model institution for science and technology
                  education in Liberia, empowering students to become
                  innovators and leaders who drive positive change in their
                  communities and nation.
                </p>
              </div>
            </div>

            <div className="bg-red-50 rounded-2xl p-10 border border-red-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-red-700" />
                  <h3 className="text-2xl font-bold text-red-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our mission is to inspire and educate students to be
                  responsible, innovative, creative, personally successful,
                  nationalistic, and willing to provide voluntary services to
                  community and nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Administration"
            title="Meet Our Administration"
            description="Our dedicated team of educators and administrators is committed to upholding the highest standards in all aspects of school life."
          />
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-10 border border-gray-200 shadow-sm">
              <div className="w-24 h-24 rounded-full bg-red-900 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                A
              </div>
              <h3 className="text-xl font-bold text-red-900">
                School Administration
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our administration team works tirelessly to ensure that every
                student receives the support, guidance, and quality education
                they deserve. For specific staff inquiries, please contact the
                school directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Discover What We Offer"
        description="Explore our academic programs, student life, and admissions process to learn what makes ABCMSTS special."
        primaryButton={{ label: "Explore Academics", to: "/academics" }}
        secondaryButton={{ label: "Admissions", to: "/admissions" }}
      />
    </>
  );
}
