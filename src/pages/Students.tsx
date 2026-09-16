import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { STUDENT_ACTIVITIES, STUDENT_LIFE_IMAGE, GALLERY_IMAGES } from "@/lib/data";
import { Link } from "react-router-dom";

export default function Students() {
  return (
    <>
      <PageHeader
        title="Student Life"
        subtitle="Education at ABCMSTS goes far beyond the classroom. Our students engage in hands-on activities, competitions, and programs that bring learning to life."
        image={STUDENT_LIFE_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Activities & Programs"
            title="Where Learning Comes Alive"
            description="From science fairs to agriculture, nursing aid training to technology projects — our students gain practical, real-world experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_ACTIVITIES.map((activity) => (
              <Link
                key={activity.title}
                to={`/students/${activity.slug}`}
                className="group block h-full cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-red-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-red-900 group-hover:text-red-700">
                    View photo gallery →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="A Glimpse Into Campus Life"
            description="Moments from our classrooms, labs, and activities that capture the spirit of ABCMSTS."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden aspect-[3/2] shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Campus life ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-800/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Community"
        description="Discover how your child can be part of the ABCMSTS family and experience education that goes beyond the classroom."
        primaryButton={{ label: "Admissions Information", to: "/admissions" }}
        secondaryButton={{ label: "Contact the School", to: "/contact" }}
      />
    </>
  );
}
