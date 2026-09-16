import { CalendarDays, Bell, Info } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import CTASection from "@/components/ui/CTASection";
import { GRADUATION_IMAGE } from "@/lib/data";

export default function Events() {
  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Stay informed about upcoming school events, activities, and important dates throughout the academic year."
        image={GRADUATION_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="School Calendar"
            title="Upcoming Events"
            description="Events and activities will be posted here as they are scheduled. Check back regularly for updates."
          />

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-10 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-red-900 text-white mx-auto mb-6">
                <CalendarDays className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-3">
                Events Coming Soon
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
                Our school calendar is updated regularly with upcoming events,
                activities, competitions, and important dates. Please check
                back soon or follow us on Instagram for the latest updates.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl bg-red-50 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <Bell className="w-6 h-6 text-red-800" />
                <h3 className="font-bold text-red-900">Stay Updated</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Follow #ABCMSTS on Instagram for the latest updates on school
                events, activities, and announcements.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-red-50 border border-red-200">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-6 h-6 text-red-700" />
                <h3 className="font-bold text-red-900">Annual Events</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our annual events include science fairs, AIRTAD competition
                participation, baccalaureate services, and graduation
                ceremonies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Visit Our School?"
        description="Prospective families are invited to tour our facilities, peek into our classrooms, and meet our teachers."
        primaryButton={{ label: "Contact the School", to: "/contact" }}
        secondaryButton={{ label: "About Our School", to: "/about" }}
      />
    </>
  );
}
