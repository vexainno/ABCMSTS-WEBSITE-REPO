import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, SCHOOL, SCHOOL_LOGO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg overflow-hidden bg-white">
                <img
                  src={SCHOOL_LOGO}
                  alt="ABCMSTS logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm">
                ABCMSTS
              </span>
            </div>
            <p className="text-sm leading-relaxed text-red-200">
              {SCHOOL.name}
            </p>
            <p className="text-sm mt-2 text-red-300">
              Est. {SCHOOL.founded}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-red-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/donate"
                  className="text-sm text-red-200 hover:text-white transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Stay Connected
            </h3>
            <div className="flex gap-3 mb-4">
              <a
                href={SCHOOL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-red-900 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SCHOOL.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-red-900 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SCHOOL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-red-900 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SCHOOL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white hover:text-red-900 transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-red-200">
              Follow #ABCMSTS for the latest updates
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-red-200">{SCHOOL.address}</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${SCHOOL.phone}`}
                  className="text-red-200 hover:text-white transition-colors"
                >
                  {SCHOOL.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${SCHOOL.email}`}
                  className="text-red-200 hover:text-white transition-colors break-all"
                >
                  {SCHOOL.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-red-300 text-center">
            &copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
