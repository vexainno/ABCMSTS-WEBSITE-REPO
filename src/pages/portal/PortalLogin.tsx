import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PortalLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleChange = (field: "email" | "password", value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: { email?: string; password?: string } = {};

    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = "Enter a valid email address.";

    if (!form.password) nextErrors.password = "Password is required.";
    else if (form.password.length < 6) nextErrors.password = "Password must be at least 6 characters.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      localStorage.setItem("abcmsts-current-user-email", form.email.trim().toLowerCase());
      navigate("/portal/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-[26px] border border-gray-200 bg-white p-6 shadow-xl shadow-gray-200 sm:p-8">
          <div className="mb-8 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-900 text-xl font-black text-white">
              ABC
            </div>
          </div>

          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-red-700">Member Login</p>
            <h1 className="mt-3 text-3xl font-black text-red-900">School E-Portal</h1>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => handleChange("email", event.target.value)}
                placeholder="student@abcmsts.edu"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
              />
              {errors.email && <p className="mt-2 text-sm text-red-700">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(event) => handleChange("password", event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-11 text-gray-900 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-100"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-700">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <Link to="/portal/register" className="font-medium text-red-700 hover:text-red-600">
                Create New Account
              </Link>
              <Link to="/portal" className="font-medium text-gray-600 hover:text-gray-900">
                Back to E-Portal
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-red-900 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-red-900/20 transition hover:bg-red-800"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <Link to="/portal/register" className="font-semibold text-red-700 hover:text-red-600">
              Forgot Password?
            </Link>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-5 text-center">
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
