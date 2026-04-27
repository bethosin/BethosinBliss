import { Link } from "react-router-dom";
import { PHONE_NUMBER, LOCATION, WHATSAPP_NUMBER } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">Bethosin Bliss</h2>
          <p className="mt-3 text-blue-200 text-sm leading-relaxed">
            Refreshing your world with premium drinks made for every moment.
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.5" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 3.5A11.94 11.94 0 0012.05 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.29-1.64a11.88 11.88 0 005.76 1.47h.01c6.56 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.95-8.43zM12.05 21.3c-1.8 0-3.56-.48-5.1-1.4l-.36-.21-3.73.97.99-3.63-.23-.37a9.34 9.34 0 01-1.44-5c0-5.17 4.2-9.37 9.37-9.37 2.5 0 4.84.97 6.6 2.73a9.27 9.27 0 012.73 6.6c0 5.17-4.2 9.37-9.37 9.37zm5.14-7.02c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.2-.44-2.28-1.41-.84-.75-1.41-1.67-1.58-1.95-.17-.28-.02-.43.13-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.43 0 1.43 1.02 2.8 1.17 2.99.14.19 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 3v12.55a2.45 2.45 0 11-1.5-2.25V10.5a6 6 0 105 5.85V7.5a8.5 8.5 0 004.5 1.35V6.15A5.5 5.5 0 0112.5 3H9z" />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-blue-200 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-blue-200 text-sm">📍 {LOCATION}</p>
          <p className="text-blue-200 text-sm mt-2">📞 {PHONE_NUMBER}</p>
        </div>
      </div>

      <div className="border-t border-blue-800 text-center py-4 text-xs text-blue-300">
        © {new Date().getFullYear()} Bethosin Bliss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
