import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { JUNIOR_HIGH_SUBJECTS, SENIOR_HIGH_SUBJECTS, ACADEMICS_IMAGE, SENIOR_HIGH_IMAGE } from "@/lib/data";

export default function AcademicsOverview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Academics"
          title="A Curriculum That Inspires"
          description="Explore a wide range of subjects offered to students, each taught by experienced professionals. Enhance your knowledge and skills in various fields, from Mathematics to Agriculture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative h-56 overflow-hidden">
              <img
                src={ACADEMICS_IMAGE}
                alt="Junior High School"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Junior High School
                </h3>
                <p className="text-red-200 text-sm mt-1">
                  Grades 7–9
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {JUNIOR_HIGH_SUBJECTS.map((subject) => (
                  <span
                    key={subject.name}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-700"
                  >
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
            <div className="relative h-56 overflow-hidden">
              <img
                src={SENIOR_HIGH_IMAGE}
                alt="Senior High School"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  Senior High School
                </h3>
                <p className="text-red-200 text-sm mt-1">
                  Grades 10–12
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {SENIOR_HIGH_SUBJECTS.map((subject) => (
                  <span
                    key={subject.name}
                    className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-gray-700"
                  >
                    {subject.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-900 text-white rounded-md text-base font-semibold hover:bg-red-800 transition-all shadow-sm hover:shadow-md group"
          >
            Explore Academics
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
