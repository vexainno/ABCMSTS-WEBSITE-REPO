import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { SCHOOL, CONTACT_IMAGE } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: SCHOOL.address,
    },
    {
      icon: Phone,
      label: "Phone",
      value: SCHOOL.phone,
      href: `tel:${SCHOOL.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: SCHOOL.email,
      href: `mailto:${SCHOOL.email}`,
    },
    {
      icon: Clock,
      label: "Office Hours",
      value: "Monday – Friday, 8:00 AM – 3:30 PM",
    },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have a question or want to learn more? We're here to help. Reach out and we'll get back to you as soon as possible."
        image={CONTACT_IMAGE}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-red-700 mb-3">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-900 leading-tight">
                We'd Love to Hear From You
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                Whether you're a prospective parent, student, or community
                member, our doors are always open. Feel free to reach out
                through any of the channels below.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-900 text-white flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-red-900 text-sm uppercase tracking-wide mb-1">
                          {info.label}
                        </div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-red-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-red-900 mb-6">
                  Send Us a Message
                </h3>

                {submitted && (
                  <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-700 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900 resize-none"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-900 text-white rounded-md font-semibold hover:bg-red-800 transition-all shadow-sm hover:shadow-md"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
