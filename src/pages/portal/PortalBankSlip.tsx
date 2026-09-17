import { Banknote, Download } from "lucide-react";
import { bankSlipData } from "@/lib/portalData";

export default function PortalBankSlip() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Bank Slip</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">Payment slip</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-900 text-white">
              <Banknote className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-red-700">Payment detail</p>
              <h2 className="text-xl font-bold text-red-900">{bankSlipData.type}</h2>
            </div>
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-900 hover:bg-red-100">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Student</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{bankSlipData.student}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Application ID</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{bankSlipData.applicationId}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Academic Year</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{bankSlipData.academicYear}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Amount</p>
            <p className="mt-2 text-lg font-bold text-red-900">{bankSlipData.amount}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Bank Name</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{bankSlipData.bankName}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Account Number</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{bankSlipData.accountNumber}</p>
          </div>
          <div className="rounded-xl bg-gray-50 p-4 md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">Reference</p>
            <p className="mt-2 text-lg font-bold text-gray-900">{bankSlipData.reference}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
