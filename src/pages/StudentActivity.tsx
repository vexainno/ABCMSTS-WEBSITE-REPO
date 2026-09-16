import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { STUDENT_ACTIVITIES } from "@/lib/data";

export default function StudentActivity() {
  const { slug } = useParams();
  const activity = STUDENT_ACTIVITIES.find((item) => item.slug === slug);

  if (!activity) {
    return <Navigate to="/students" replace />;
  }

  return (
    <>
      <PageHeader
        title={activity.title}
        subtitle={activity.description}
        image={activity.image}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/students"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-900 hover:text-red-700 transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Student Life
          </Link>

          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-700">Student Life Gallery</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-red-900">{activity.title}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{activity.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activity.gallery.map((image, index) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noreferrer"
                className="group block aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                aria-label={`Open ${activity.title} photo ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${activity.title} activity ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
