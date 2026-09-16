import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-red-900 text-white mx-auto mb-6">
          <Mail className="w-7 h-7" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-red-900">
          Subscribe for Our Newsletter
        </h2>
        <p className="mt-3 text-gray-600">
          Stay informed about our latest offerings and updates.
        </p>

        {submitted ? (
          <div className="mt-8 flex items-center justify-center gap-2 text-green-600 font-medium">
            <CheckCircle className="w-6 h-6" />
            Thank you for subscribing!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-900 text-white rounded-md font-semibold hover:bg-red-800 transition-all shadow-sm"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
