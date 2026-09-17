import { Shirt, CheckCircle2 } from "lucide-react";
import { uniforms } from "@/lib/portalData";

export default function PortalUniform() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Uniform</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">Required school wear</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-base leading-7 text-gray-600">
          Uniform requirements vary between junior and senior levels, and also between boys and girls. The school will confirm the exact items and sizes during registration.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {uniforms.map((item) => (
          <div key={item.name} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-900">
              <Shirt className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-red-900">{item.name}</h2>
            <p className="mt-1 text-sm font-medium text-gray-500">{item.grade}</p>
            <p className="mt-4 text-2xl font-black text-red-900">{item.price}</p>
            <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4" />
              Available for purchase
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
