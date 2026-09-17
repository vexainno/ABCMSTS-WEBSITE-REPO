import { useState } from "react";
import { timetableData } from "@/lib/portalData";

const grades = Object.keys(timetableData);

export default function PortalTimetable() {
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-700">Timetable</p>
        <h1 className="mt-3 text-3xl font-black text-red-900">Class schedule</h1>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap gap-3">
          {grades.map((grade) => (
            <button
              key={grade}
              type="button"
              onClick={() => setSelectedGrade(grade)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                selectedGrade === grade
                  ? "bg-red-900 text-white"
                  : "border border-red-200 bg-red-50 text-red-900 hover:bg-red-100"
              }`}
            >
              {grade}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2 text-left">
            <thead>
              <tr>
                <th className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">Time</th>
                <th className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">Monday</th>
                <th className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">Tuesday</th>
                <th className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">Wednesday</th>
                <th className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">Thursday</th>
                <th className="px-3 py-3 text-sm font-bold uppercase tracking-wide text-gray-600">Friday</th>
              </tr>
            </thead>
            <tbody>
              {timetableData[selectedGrade].map((slot) => (
                <tr key={`${selectedGrade}-${slot.time}`} className="rounded-xl bg-gray-50">
                  <td className="rounded-l-xl px-3 py-3 font-semibold text-red-900">{slot.time}</td>
                  <td className="px-3 py-3 text-gray-700">{slot.monday}</td>
                  <td className="px-3 py-3 text-gray-700">{slot.tuesday}</td>
                  <td className="px-3 py-3 text-gray-700">{slot.wednesday}</td>
                  <td className="px-3 py-3 text-gray-700">{slot.thursday}</td>
                  <td className="rounded-r-xl px-3 py-3 text-gray-700">{slot.friday}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
