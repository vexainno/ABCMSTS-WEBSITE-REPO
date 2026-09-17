import { Download, FileText } from "lucide-react";
import { schoolFees, schoolFeesBrochure } from "@/lib/portalData";

export default function PortalFees() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">School Fees</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">Fees information</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-xl font-bold text-red-900">Current fee breakdown</h2>
          <div className="mt-5 space-y-3">
            {schoolFees.map((fee) => (
              <div key={fee.label} className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="font-medium text-gray-700">{fee.label}</span>
                <span className="text-lg font-bold text-red-900">{fee.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-900 text-white">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-red-700">Brochure</p>
              <h3 className="text-lg font-bold text-red-900">{schoolFeesBrochure.title}</h3>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">Format: {schoolFeesBrochure.format}</p>
          <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-900 px-4 py-3 text-sm font-semibold text-white hover:bg-red-800">
            <Download className="h-4 w-4" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
