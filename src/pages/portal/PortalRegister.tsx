import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PortalRegister() {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!form.firstName.trim()) nextErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) nextErrors.lastName = "Last name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.password) nextErrors.password = "Password is required.";
    else if (form.password.length < 8) nextErrors.password = "Password must be at least 8 characters.";
    if (!form.confirmPassword) nextErrors.confirmPassword = "Please confirm your password.";
    else if (form.confirmPassword !== form.password) nextErrors.confirmPassword = "Passwords do not match.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200 sm:p-8">
          <div className="mb-8 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-900 text-xl font-black text-white">
              ABC
            </div>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-700">Create Account</p>
            <h1 className="mt-3 text-3xl font-black text-red-900">Student / Applicant Registration</h1>
          </div>

          {success ? (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
              <h2 className="mt-4 text-2xl font-bold text-green-900">Account Created Successfully</h2>
              <p className="mt-3 text-gray-700">
                Your E-Portal account has been created. You can now log in and continue with your application.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/portal/login" className="rounded-xl bg-red-900 px-5 py-3 font-semibold text-white">
                  Login
                </Link>
                <Link to="/portal" className="rounded-xl border border-red-200 bg-white px-5 py-3 font-semibold text-red-900">
                  Back to E-Portal
                </Link>
              </div>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">First Name</label>
                  <input value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                  {errors.firstName && <p className="mt-2 text-sm text-red-700">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Middle Name</label>
                  <input value={form.middleName} onChange={(e) => handleChange("middleName", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Last Name</label>
                  <input value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                  {errors.lastName && <p className="mt-2 text-sm text-red-700">{errors.lastName}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" value={form.dob} onChange={(e) => handleChange("dob", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                  {errors.email && <p className="mt-2 text-sm text-red-700">{errors.email}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                  <input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                  {errors.phone && <p className="mt-2 text-sm text-red-700">{errors.phone}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" value={form.password} onChange={(e) => handleChange("password", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                  {errors.password && <p className="mt-2 text-sm text-red-700">{errors.password}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input type="password" value={form.confirmPassword} onChange={(e) => handleChange("confirmPassword", e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
                  {errors.confirmPassword && <p className="mt-2 text-sm text-red-700">{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-3 pt-2 sm:flex-row">
                <Link to="/portal/login" className="text-sm font-medium text-red-700 hover:text-red-600">
                  Already have an account? Login
                </Link>
                <Link to="/portal" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Back to E-Portal
                </Link>
              </div>

              <button type="submit" className="w-full rounded-xl bg-red-900 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-800">
                Create Account
              </button>
            </form>
          )}

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-red-800 transition hover:text-red-700">
              <ArrowLeft className="h-4 w-4" />
              Back to School Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
