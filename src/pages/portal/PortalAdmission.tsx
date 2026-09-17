import { useState } from "react";
import { CheckCircle2, ClipboardList } from "lucide-react";
import { applicationStatusSteps } from "@/lib/portalData";

const initialForm = {
  firstName: "",
  lastName: "",
  email: localStorage.getItem("abcmsts-current-user-email") || "",
  phone: "",
  dob: "",
  grade: "Grade 7",
  program: "General Studies",
  address: "",
  parentName: "",
  parentPhone: "",
  previousSchool: "",
  notes: "",
};

export default function PortalAdmission() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const applications = JSON.parse(localStorage.getItem("abcmsts-portal-applications") || "[]");
    const record = {
      fullName: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      status: "Application Submitted",
      stage: "Application Submitted",
      registrationStatus: "Registration In Progress",
      entranceDate: "",
      interviewDate: "",
      decisionEmail: form.email,
    };

    const existingIndex = applications.findIndex((item: { email: string }) => item.email.toLowerCase() === form.email.toLowerCase());
    if (existingIndex >= 0) {
      applications[existingIndex] = { ...applications[existingIndex], ...record };
    } else {
      applications.push(record);
    }

    localStorage.setItem("abcmsts-portal-applications", JSON.stringify(applications));
    setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Admission / Re-Admission</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">Student application process</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-900 text-white">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-red-700">Application form</p>
            <h2 className="text-xl font-bold text-red-900">Submit or renew your application</h2>
          </div>
        </div>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-green-600" />
            <h3 className="mt-3 text-2xl font-bold text-green-900">Application Submitted</h3>
            <p className="mt-2 text-gray-700">
              Your application has been received and is now under review. The school will update your status and notify you by email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">First Name</label>
                <input value={form.firstName} onChange={(event) => handleChange("firstName", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Last Name</label>
                <input value={form.lastName} onChange={(event) => handleChange("lastName", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value={form.email} onChange={(event) => handleChange("email", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                <input value={form.phone} onChange={(event) => handleChange("phone", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" value={form.dob} onChange={(event) => handleChange("dob", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Applying For</label>
                <select value={form.grade} onChange={(event) => handleChange("grade", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100">
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">Program / Interest</label>
                <input value={form.program} onChange={(event) => handleChange("program", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">Home Address</label>
                <textarea value={form.address} onChange={(event) => handleChange("address", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" rows={3} required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Parent / Guardian Name</label>
                <input value={form.parentName} onChange={(event) => handleChange("parentName", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Parent / Guardian Phone</label>
                <input value={form.parentPhone} onChange={(event) => handleChange("parentPhone", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" required />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">Previous School</label>
                <input value={form.previousSchool} onChange={(event) => handleChange("previousSchool", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-700">Additional Notes</label>
                <textarea value={form.notes} onChange={(event) => handleChange("notes", event.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" rows={4} />
              </div>
            </div>

            <button type="submit" className="w-full rounded-xl bg-red-900 px-5 py-3 text-base font-semibold text-white hover:bg-red-800">
              Submit Application
            </button>
          </form>
        )}

        <div className="mt-6 space-y-4">
          {applicationStatusSteps.map((step, index) => (
            <div key={step.label} className="flex items-center gap-4 rounded-xl bg-gray-50 p-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${step.complete ? "bg-green-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                {step.complete ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${step.complete ? "text-green-800" : "text-gray-700"}`}>{step.label}</p>
              </div>
              <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${step.complete ? "text-green-700" : "text-gray-500"}`}>
                {step.complete ? "Done" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
