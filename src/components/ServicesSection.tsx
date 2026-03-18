import { Smartphone, Tv, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Samsung Mobile Repair",
    desc: "Expert repair for Galaxy devices including display, battery, and software issues.",
  },
  {
    icon: Tv,
    title: "Home Appliance Service",
    desc: "Reliable service for TVs, refrigerators, washing machines, and ACs.",
  },
  {
    icon: Cpu,
    title: "Genuine Spare Parts",
    desc: "100% original Samsung parts with warranty assurance.",
  },
  {
    icon: Zap,
    title: "Fast Service",
    desc: "Quick turnaround with same-day service for most repairs.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-orange-500 uppercase tracking-wide">
            Our Services
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Premium Samsung Care
          </h2>
          <p className="text-gray-600 mt-4">
            Professional service for Samsung mobiles and home appliances with trusted expertise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-[1.02] transition duration-300"
              >
                {/* Card */}
                <div className="rounded-2xl bg-white p-6 h-full flex gap-4 items-start shadow-sm group-hover:shadow-xl transition">
                  
                  {/* Icon */}
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-xl group-hover:scale-110 transition">
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

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