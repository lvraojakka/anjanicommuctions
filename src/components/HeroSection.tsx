import { Calendar, Phone } from "lucide-react";
import HeroCarousel from "./ui/hero-carousel";
import { motion } from "framer-motion";
import Counter from "./ui/counter";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 80, suffix: "K+", label: "Devices Repaired" },
  { value: 100, suffix: "%", label: "Genuine Parts" },
];

const HeroSection = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center overflow-hidden"
  style={{ background: "var(--gradient-hero)" }}
>
  {/* Gradient orbs */}
  <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "hsl(24 95% 53% / 0.08)" }} />
  <div className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none" style={{ background: "hsl(35 100% 55% / 0.06)" }} />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-24 pb-12 grid lg:grid-cols-2 gap-10 items-center w-full">

    {/* LEFT */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center lg:text-left max-w-lg mx-auto lg:mx-0"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-orange-200 bg-orange-50">
        <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-xs sm:text-sm font-semibold text-orange-600">
          Samsung Authorized Service Center
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900">
        Expert Repair for Your{" "}
        <span className="block sm:inline bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          Samsung Devices
        </span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
        Anjani Communications — Bhimavaram's trusted Samsung Authorized Service Center for mobile phones and home appliances. We use only genuine parts.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6">
        <a
          href="tel:8185816666"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-5 rounded-xl text-sm font-medium shadow hover:scale-[1.02] transition"
        >
          <Phone size={16} />
          Call Now
        </a>

        <a
          href="#contact"
          className="flex items-center justify-center gap-2 border border-orange-500 text-orange-500 py-3 px-5 rounded-xl text-sm font-medium hover:bg-orange-50 transition"
        >
          <Calendar size={16} />
          Book Service
        </a>
      </div>

      {/* Stats */}
      <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start gap-6 sm:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              <Counter value={stat.value} />
              {stat.suffix}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-500 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex justify-center mt-8 lg:mt-0"
    >
      <HeroCarousel />
    </motion.div>

  </div>
</section>
  );
};

export default HeroSection;