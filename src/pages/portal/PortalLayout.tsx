import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft, LogOut } from "lucide-react";
import { portalNavItems, portalStudent } from "@/lib/portalData";

interface PortalLayoutProps {
  children: React.ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-red-800 bg-red-900 text-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-md border border-white/20 p-2 lg:hidden"
              aria-label="Toggle navigation"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-black text-red-900">
                ABC
              </div>
              <div>
                <div className="text-sm font-bold tracking-wide">ABCMSTS</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-red-100">E-Portal</div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-red-50">
              {portalStudent.year}
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-red-50">
              {portalStudent.name}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">School Website</span>
            </Link>
            <Link
              to="/portal"
              onClick={() => localStorage.removeItem("abcmsts-current-user-email")}
              className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-900 transition hover:bg-red-50"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Link>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-red-800 bg-red-900 px-4 py-4 lg:hidden">
            <nav className="space-y-2">
              {portalNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-sm font-medium ${
                      isActive ? "bg-white text-red-900" : "text-red-50 hover:bg-white/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
              Navigation
            </p>
            <nav className="space-y-2">
              {portalNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-red-50 text-red-900 ring-1 ring-red-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Student / Applicant</p>
              <p className="mt-2 text-base font-bold text-red-900">{portalStudent.name}</p>
              <p className="mt-1 text-sm text-gray-600">Application: {portalStudent.id}</p>
              <p className="mt-1 text-sm text-gray-600">Status: {portalStudent.applicationStatus}</p>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500 lg:hidden">
            <span className="font-medium text-red-700">Current Page:</span>
            <span>{location.pathname.replace("/portal/", "") || "home"}</span>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
