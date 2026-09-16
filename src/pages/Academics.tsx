import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import {
  JUNIOR_HIGH_SUBJECTS,
  SENIOR_HIGH_SUBJECTS,
  ACADEMICS_IMAGE,
  SCIENCE_LAB_IMAGE,
  COMPUTER_LAB_IMAGE,
  LIBRARY_IMAGE,
} from "@/lib/data";

export default function Academics() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle="Explore a wide range of subjects offered to students, each taught by experienced professionals. Enhance your knowledge and skills in various fields, from Mathematics to Agriculture."
        image={ACADEMICS_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Junior High School"
            title="Grades 7–9"
            description="A comprehensive foundation in core academic subjects, designed to build critical thinking and prepare students for advanced study."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {JUNIOR_HIGH_SUBJECTS.map((subject) => {
              const Icon = subject.icon;
              return (
                <div
                  key={subject.name}
                  className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-red-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-900 text-white mb-4 group-hover:bg-white group-hover:text-red-900 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="font-semibold text-red-900 text-sm">
                    {subject.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Senior High School"
            title="Grades 10–12"
            description="Advanced coursework in the sciences, humanities, and specialized programs including ICT and Nursing Aid, preparing students for university and careers."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SENIOR_HIGH_SUBJECTS.map((subject) => {
              const Icon = subject.icon;
              return (
                <div
                  key={subject.name}
                  className="group flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-red-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-900 text-white mb-4 group-hover:bg-white group-hover:text-red-900 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="font-semibold text-red-900 text-sm">
                    {subject.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Facilities"
            title="Spaces That Inspire Learning"
            description="Our campus provides students with the resources they need to excel in their studies and practical work."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Science Laboratory",
                description:
                  "Equipped labs where students conduct experiments in biology, chemistry, and physics, bringing theory to practice.",
                image: SCIENCE_LAB_IMAGE,
              },
              {
                title: "Computer Lab",
                description:
                  "Modern computing facilities supporting our Computer Science and ICT programs, helping students build digital skills.",
                image: COMPUTER_LAB_IMAGE,
              },
              {
                title: "Library",
                description:
                  "A well-stocked library providing students with resources for research, reading, and independent study.",
                image: LIBRARY_IMAGE,
              },
            ].map((facility) => (
              <div
                key={facility.title}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">
                    {facility.title}
                  </h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Apply?"
        description="Learn about our admissions process and take the first step toward joining the ABCMSTS community."
        primaryButton={{ label: "Admissions Information", to: "/admissions" }}
        secondaryButton={{ label: "Contact the School", to: "/contact" }}
      />
    </>
  );
}
