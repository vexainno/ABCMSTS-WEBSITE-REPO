import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortalLanding() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[28px] border border-red-100 bg-white p-6 shadow-xl shadow-red-900/5 sm:p-10 lg:p-14">
          <div className="flex items-center justify-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-900 text-2xl font-black text-white shadow-lg shadow-red-900/20">
              ABC
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-red-700">School E-Portal</p>
            <h1 className="mt-6 text-3xl font-black text-red-900 sm:text-4xl lg:text-5xl">
              Welcome to the School E-Portal
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Access school information, admission services, registration details, fees, uniforms,
              announcements, and important resources from one secure student experience.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/portal/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-900 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-800"
            >
              Login
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/portal/register"
              className="inline-flex items-center justify-center rounded-xl border border-red-200 bg-red-50 px-7 py-4 text-base font-semibold text-red-900 transition hover:bg-red-100"
            >
              Create Account
            </Link>
          </div>

          <div className="mt-10 text-center">
            <p className="text-base text-gray-600">
              Don&apos;t have an account?{' '}
              <Link to="/portal/register" className="font-semibold text-red-800 hover:text-red-700">
                Create one now
              </Link>
            </p>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-800 transition hover:text-red-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to School Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
