import { Award, FlaskConical, Sprout, HeartPulse, GraduationCap, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const ACHIEVEMENTS = [
  {
    title: "AIRTAD Competition",
    description:
      "Students participate in the AIRTAD competition, showcasing innovation, research, and technology projects.",
    icon: Trophy,
  },
  {
    title: "Science Fair",
    description:
      "Annual science fairs where students present innovative experiments and scientific projects to the community.",
    icon: FlaskConical,
  },
  {
    title: "Agriculture Activities",
    description:
      "Practical agricultural education programs teaching students food security and sustainable farming.",
    icon: Sprout,
  },
  {
    title: "Nursing Aid Practical",
    description:
      "Senior high students gain hands-on healthcare experience through our Nursing Aid practical training.",
    icon: HeartPulse,
  },
  {
    title: "Baccalaureate Program",
    description:
      "A baccalaureate program celebrating the spiritual and academic journey of our graduating students.",
    icon: Award,
  },
  {
    title: "Graduation Activities",
    description:
      "Commencement ceremonies honoring the achievements and future potential of our graduating classes.",
    icon: GraduationCap,
  },
];

export default function Achievements() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Achievements & Activities"
          title="Celebrating Our Students' Excellence"
          description="Our students participate in a range of competitions, programs, and activities that showcase their talents and dedication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-red-700">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-red-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
