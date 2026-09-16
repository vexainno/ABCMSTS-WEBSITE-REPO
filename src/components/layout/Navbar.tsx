import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { NAV_ITEMS, SCHOOL } from "@/lib/data";
import schoolLogo from "@/pages/264108_63972c627fc740a08be69564fcd03f79~mv2.avif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-red-900/95 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-11 h-11 rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={schoolLogo}
                alt="ABCMSTS logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className={`block text-sm font-bold leading-tight ${
                  scrolled ? "text-red-900" : "text-white"
                }`}
              >
                ABCMSTS
              </span>
              <span
                className={`block text-xs leading-tight ${
                  scrolled ? "text-gray-500" : "text-red-200"
                }`}
              >
                Model Science & Technology School
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      isActive
                        ? scrolled
                          ? "text-red-700 bg-red-50"
                          : "text-white bg-white/10"
                        : scrolled
                          ? "text-gray-700 hover:text-red-900 hover:bg-gray-100"
                          : "text-red-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-red-900 rounded-md text-sm font-semibold hover:bg-white transition-all shadow-sm hover:shadow-md"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-red-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-4 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "text-red-700 bg-red-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/donate"
            className="flex items-center gap-2 px-4 py-3 mt-2 bg-white text-red-900 rounded-md text-base font-semibold"
          >
            <Heart className="w-5 h-5" />
            Donate
          </Link>
          <div className="pt-3 px-4 text-sm text-gray-500 border-t border-gray-100 mt-2">
            {SCHOOL.address}
          </div>
        </div>
      </div>
    </header>
  );
}
