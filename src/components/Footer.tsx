import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold font-display tracking-tight">
            Anjani<span className="text-primary">.</span>
          </h3>
          <p className="mt-4 text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            Samsung Authorized Service Center providing factory-certified repairs for mobile devices and home appliances in Bhimavaram since 2009.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Why Us", "Certifications", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                  className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-primary-foreground/50 mb-4">Contact Info</h4>
          <div className="space-y-4">
            {[
              { icon: MapPin, text: "PP Rd, opp. Raymonds, Bhimavaram, AP 534201" },
              { icon: Phone, text: "8185816666" },
              { icon: Mail, text: "anjanihhp@gmail.com" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Anjani Communications. All rights reserved. | Developed by Anjani IT services.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
