import { Heart, ArrowRight, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { SCHOOL, GRADUATION_IMAGE } from "@/lib/data";

export default function Donate() {
  return (
    <>
      <PageHeader
        title="Support Our School"
        subtitle="Your generosity helps us continue providing quality STEM education to the next generation of Liberian leaders and innovators."
        image={GRADUATION_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white text-red-900 mx-auto mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">
              Make a Difference
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
              As a school built through corporate social responsibility, we
              believe in the power of community support. Your contribution
              helps us maintain our facilities, provide learning materials,
              and continue offering quality education to our students.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
            <h3 className="text-xl font-bold text-red-900 mb-6 text-center">
              How to Contribute
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-900 text-white flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-red-900">
                    Call the School
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Contact us at{" "}
                    <a
                      href={`tel:${SCHOOL.phone}`}
                      className="text-red-700 font-medium"
                    >
                      {SCHOOL.phone}
                    </a>{" "}
                    to learn about donation opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-900 text-white flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-red-900">
                    Email Us
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Reach out to us at{" "}
                    <a
                      href={`mailto:${SCHOOL.email}`}
                      className="text-red-700 font-medium"
                    >
                      {SCHOOL.email}
                    </a>{" "}
                    to discuss how you can support our school.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={`mailto:${SCHOOL.email}?subject=Donation Inquiry`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-900 rounded-md text-base font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
            >
              Reach Out to Donate
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
