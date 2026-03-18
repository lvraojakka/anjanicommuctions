import { Smartphone, Tv, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Repair",
    desc: "Display, battery & software fixes for Samsung devices.",
  },
  {
    icon: Tv,
    title: "Appliance Service",
    desc: "Service for TVs, ACs, washing machines & more.",
  },
  {
    icon: Cpu,
    title: "Genuine Parts",
    desc: "Original Samsung parts with warranty.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    desc: "Quick turnaround with same-day support.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50" id="services">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
  Our Services
</h2>
          <p className="text-gray-600 text-sm mt-2">
            Reliable Samsung repair and service with expert care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition"
              >
                
                {/* Icon with Gradient */}
                <div className="p-2 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                  <Icon size={18} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;