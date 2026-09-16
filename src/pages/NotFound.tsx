import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-red-900 pt-16">
      <div className="text-center px-4">
        <div className="text-8xl md:text-9xl font-bold text-white">404</div>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="mt-3 text-red-200 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-red-900 rounded-md font-semibold hover:bg-white transition-all"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
