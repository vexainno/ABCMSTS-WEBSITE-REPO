import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle2, MailCheck } from "lucide-react";
import { admissionStatusOptions, applicationStatusSteps } from "@/lib/portalData";

type ApplicationRecord = {
  fullName: string;
  email: string;
  status: string;
  stage: string;
  entranceDate?: string;
  interviewDate?: string;
  decisionEmail?: string;
  registrationStatus?: string;
};

const STORAGE_KEY = "abcmsts-portal-applications";

const defaultRecord: ApplicationRecord = {
  fullName: "Michael Johnson",
  email: "student@abcmsts.edu",
  status: "Under Review",
  stage: "Under Review",
  entranceDate: "2026-10-10",
  interviewDate: "2026-10-20",
  decisionEmail: "student@abcmsts.edu",
  registrationStatus: "Registration In Progress",
};

export default function PortalApplicationStatus() {
  const [email, setEmail] = useState(localStorage.getItem("abcmsts-current-user-email") || "student@abcmsts.edu");
  const [record, setRecord] = useState<ApplicationRecord>(defaultRecord);
  const [adminStatus, setAdminStatus] = useState(defaultRecord.status);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([defaultRecord]));
      return;
    }

    const items = JSON.parse(stored) as ApplicationRecord[];
    const match = items.find((item) => item.email.toLowerCase() === email.toLowerCase()) || items[0] || defaultRecord;
    setRecord(match);
    setAdminStatus(match.status);
  }, [email]);

  const lookupRecord = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setRecord(defaultRecord);
      return;
    }

    const items = JSON.parse(stored) as ApplicationRecord[];
    const match = items.find((item) => item.email.toLowerCase() === email.toLowerCase()) || defaultRecord;
    setRecord(match);
    setAdminStatus(match.status);
  };

  const handleAdminUpdate = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const items = stored ? (JSON.parse(stored) as ApplicationRecord[]) : [defaultRecord];
    const existingIndex = items.findIndex((item) => item.email.toLowerCase() === (record.email || email).toLowerCase());
    const updated = {
      ...record,
      email: record.email || email,
      status: adminStatus,
      stage: adminStatus,
      registrationStatus: adminStatus === "Registration Complete" ? "Registration Complete" : "Registration In Progress",
    };

    if (existingIndex >= 0) {
      items[existingIndex] = updated;
    } else {
      items.push(updated);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setRecord(updated);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Application Status</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">Track your progress</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-end">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium text-gray-700">Check application by email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
              placeholder="student@abcmsts.edu"
            />
          </div>
          <button type="button" onClick={lookupRecord} className="rounded-xl bg-red-900 px-5 py-3 text-sm font-semibold text-white hover:bg-red-800">
            View Status
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">Status overview</h2>
          <div className="mt-5 space-y-4">
            {applicationStatusSteps.map((step) => (
              <div key={step.label} className="flex items-center gap-3 rounded-xl bg-gray-50 p-3">
                <div className={`flex h-9 w-9 items-center justify-center rounded-full ${step.complete ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-500"}`}>
                  {step.complete ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                </div>
                <span className={`font-medium ${step.complete ? "text-gray-800" : "text-gray-500"}`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
          <p className="text-sm uppercase tracking-[0.18em] text-red-700">Current status</p>
          <h2 className="mt-3 text-3xl font-black text-red-900">{record.status}</h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            {record.status === "Accepted"
              ? "Your application has been accepted. The school will continue with registration and send the official letter to your email."
              : record.status === "Not Accepted"
                ? "Your application is not accepted at this stage. A private decision email will be sent to the email address on your account."
                : record.status === "Application Submitted"
                  ? "Your application has been submitted successfully and is now awaiting review by the admissions team."
                  : record.status === "Under Review"
                    ? "The admissions office is reviewing your application. Entrance details will be announced after the review is complete."
                    : record.status === "Entrance Exam Scheduled"
                      ? `Your entrance exam has been scheduled for ${record.entranceDate || "a future date"}. Please prepare for the exam.`
                      : record.status === "Interview Scheduled"
                        ? `Your interview has been scheduled for ${record.interviewDate || "a future date"}.`
                        : "Your record is being updated by the school administration and will reflect the latest status here."}
          </p>

          <div className="mt-5 rounded-xl bg-white p-3 text-sm text-gray-700">
            <div className="flex items-center gap-2 font-semibold text-red-900">
              <MailCheck className="h-4 w-4" />
              Decision email:
            </div>
            <p className="mt-2">{record.decisionEmail || record.email}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">School admin update</p>
        <h2 className="mt-3 text-xl font-bold text-red-900">Update admissions status by email</h2>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Student email</label>
            <input
              value={record.email}
              onChange={(event) => setRecord((current) => ({ ...current, email: event.target.value }))}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">Status</label>
            <select
              value={adminStatus}
              onChange={(event) => setAdminStatus(event.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100"
            >
              {admissionStatusOptions.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <button type="button" onClick={handleAdminUpdate} className="mt-6 rounded-xl bg-red-900 px-5 py-3 text-sm font-semibold text-white hover:bg-red-800">
          Save status update
        </button>
      </div>
    </div>
  );
}
