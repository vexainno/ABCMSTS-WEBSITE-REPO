import { STUDENT_ACTIVITIES, STUDENT_LIFE_IMAGE } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

export default function StudentLife() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Student Life"
          title="Learning Beyond the Classroom"
          description="Our students engage in hands-on activities that bring learning to life — from science fairs to agriculture, nursing aid training to technology projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDENT_ACTIVITIES.map((activity) => (
            <div
              key={activity.title}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900 via-red-900/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-red-100 text-sm leading-relaxed opacity-90">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
