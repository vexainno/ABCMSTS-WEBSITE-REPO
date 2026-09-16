import SectionHeader from "@/components/ui/SectionHeader";
import { WHY_ABCMSTS } from "@/lib/data";

export default function WhyABCMSTS() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why ABCMSTS"
          title="An Education Built for the Future"
          description="Our educational philosophy combines academic rigor with character development, preparing students to lead and innovate."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ABCMSTS.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-red-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-900 text-white mb-6 group-hover:bg-white group-hover:text-red-900 transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
