import { ShieldCheck, Users, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authorized Service",
    desc: "Official Samsung service with trusted repair standards.",
  },
  {
    icon: Users,
    title: "Certified Technicians",
    desc: "Skilled experts for accurate and reliable repairs.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "Serving customers with quality and trust.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50" id="about">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-10 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Trusted Samsung service center delivering reliable repairs with genuine parts.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition"
              >
                
                {/* Icon with Gradient */}
                <div className="mb-3 p-2 rounded-lg w-fit bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                  <Icon size={18} />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;