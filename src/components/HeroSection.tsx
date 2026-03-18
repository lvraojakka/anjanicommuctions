import { Phone, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import heroDevices from "@/assets/hero-devices.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Gradient orbs */}
      <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "hsl(24 95% 53% / 0.08)" }} />
      <div className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: "hsl(35 100% 55% / 0.06)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-primary/20" style={{ background: "hsl(24 95% 53% / 0.08)" }}>
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Samsung Authorized Service Center</span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Expert Care for Your{" "}
            <span className="gradient-text">Samsung</span> Devices.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-[48ch] leading-relaxed">
            Anjani Communications — Bhimavaram's trusted Samsung Authorized Service Center for mobile phones and home appliances. Genuine parts, certified technicians, guaranteed satisfaction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="tel:8185816666" className="btn-primary">
              <Phone size={18} />
              Call Now
            </a>
            <a href="#contact" className="btn-secondary">
              <Calendar size={18} />
              Book Service
            </a>
          </div>

          {/* Trust stats */}
          <div className="mt-14 flex gap-10">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "50K+", label: "Devices Repaired" },
              { value: "100%", label: "Genuine Parts" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold gradient-text font-display">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
            <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-40" />
          </div>

          <img
            src={heroDevices}
            alt="Samsung Galaxy smartphone and home appliances"
            className="w-full max-w-lg animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
