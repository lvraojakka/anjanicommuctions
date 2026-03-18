import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              ANJANI<span className="text-orange-500">.</span>
            </h3>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              Samsung Authorized Service Center in Bhimavaram offering reliable repairs with genuine parts.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-sm hover:text-orange-400 transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-3">
              Contact
            </h4>
            <div className="space-y-3 text-sm">

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-500" />
                <span>Bhimavaram, AP</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <a href="tel:8185816666">8185816666</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500" />
                <a href="mailto:anjaninhhp@gmail.com">Email Us</a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Anjani Communications
        </div>

      </div>
    </footer>
  );
};

export default Footer;