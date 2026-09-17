import { CalendarDays, ChevronRight } from "lucide-react";
import { latestAnnouncements } from "@/lib/portalData";

export default function PortalAnnouncements() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Announcements</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">School notices & updates</h1>
      </div>

      <div className="space-y-5">
        {latestAnnouncements.map((item) => (
          <article key={item.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex w-fit rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-800">
                {item.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarDays className="h-4 w-4" />
                {item.date}
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-red-900">{item.title}</h2>
            <p className="mt-3 text-base leading-7 text-gray-600">{item.content}</p>

            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-100">
              Read more
              <ChevronRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
