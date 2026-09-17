import { ArrowRight, BellRing, Book, CreditCard, FileText, Shirt, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { latestAnnouncements, portalStudent } from "@/lib/portalData";

const currentUserEmail = localStorage.getItem("abcmsts-current-user-email") || "student@abcmsts.edu";

const quickAccess = [
  { title: "Timetable", description: "View the school class timetable.", path: "/portal/timetable", icon: Book },
  { title: "Announcements", description: "Read the latest school notices.", path: "/portal/announcements", icon: BellRing },
  { title: "School Fees", description: "View the current fees brochure.", path: "/portal/fees", icon: CreditCard },
  { title: "Uniform", description: "Review uniform requirements and prices.", path: "/portal/uniform", icon: Shirt },
  { title: "Apply / Re-Apply", description: "Submit or renew your application.", path: "/portal/admission", icon: FileText },
  { title: "Application Status", description: "Track your admission progress.", path: "/portal/application-status", icon: Users },
];

export default function PortalDashboard() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-red-100 bg-gradient-to-r from-red-900 via-red-800 to-red-700 p-6 text-white shadow-lg shadow-red-900/10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-100">Student Portal</p>
            <h1 className="mt-3 text-3xl font-black">Welcome back, {portalStudent.name.split(" ")[0]}.</h1>
          </div>
          <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-red-50">
            Academic Year: {portalStudent.year}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:col-span-2">
          <h2 className="text-lg font-bold text-red-900">Quick Access</h2>
          <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-800">
            Account email: <span className="font-semibold">{currentUserEmail}</span>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {quickAccess.map(({ title, description, path, icon: Icon }) => (
              <Link key={title} to={path} className="group rounded-2xl border border-gray-200 bg-gray-50 p-4 transition hover:border-red-200 hover:bg-red-50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-900 text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-red-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700">
                  Open
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-red-900">User Status</h2>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
              <span>Student / Applicant</span>
              <span className="font-semibold text-gray-900">{portalStudent.name}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
              <span>Academic Year</span>
              <span className="font-semibold text-gray-900">{portalStudent.year}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
              <span>Application Status</span>
              <span className="font-semibold text-red-700">{portalStudent.applicationStatus}</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-3 py-2">
              <span>Registration Status</span>
              <span className="font-semibold text-gray-900">{portalStudent.registrationStatus}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-red-900">Latest Announcements</h2>
          <Link to="/portal/announcements" className="text-sm font-semibold text-red-700 hover:text-red-800">
            View all
          </Link>
        </div>

        <div className="mt-5 space-y-4">
          {latestAnnouncements.map((item) => (
            <div key={item.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-800">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-red-900">{item.title}</h3>
                </div>
                <span className="text-sm text-gray-500">{item.date}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">{item.excerpt}</p>
              <div className="mt-4 flex justify-end">
                <Link to="/portal/announcements" className="rounded-lg bg-red-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
