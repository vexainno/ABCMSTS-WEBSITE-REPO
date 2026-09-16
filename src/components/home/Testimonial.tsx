import { Quote } from "lucide-react";
import { TESTIMONIAL_IMAGE } from "@/lib/data";

export default function Testimonial() {
  return (
    <section className="py-20 lg:py-28 bg-red-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-white mx-auto mb-8" />

        <blockquote className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light italic">
          "I am deeply honored to reflect on my incredible journey. ABCMSTS has
          not only equipped me with academic knowledge but has also instilled in
          me a passion for innovation and critical thinking. The dedicated
          faculty, supportive community, and diverse opportunities have shaped
          me into a well-rounded individual ready to tackle future challenges."
        </blockquote>

        <div className="mt-10 flex flex-col items-center">
          <img
            src={TESTIMONIAL_IMAGE}
            alt="Denzel Abu Kerkula Jr."
            className="w-24 h-24 rounded-full object-cover border-4 border-white mb-4 shadow-lg"
          />
          <div className="text-lg font-bold text-white">
            Denzel Abu Kerkula Jr.
          </div>
          <div className="text-white text-sm mt-1">
            Salutatorian, Class of 2024
          </div>
        </div>
      </div>
    </section>
  );
}
