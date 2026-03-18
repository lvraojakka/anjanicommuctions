import { ShieldCheck, Users, Award } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authorized Service",
    desc: "Official Samsung authorized service with trusted repair standards.",
  },
  {
    icon: Users,
    title: "Certified Technicians",
    desc: "Skilled and Samsung-trained experts for accurate repairs.",
  },
  {
    icon: Award,
    title: "15+ Years of Trust",
    desc: "Serving customers with reliability and excellence since 2009.",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm text-orange-500 uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Trusted Samsung Service Center
          </h2>
          <p className="text-gray-600 mt-4">
            Anjani Communications delivers reliable Samsung mobile and appliance repairs using genuine parts and expert technicians.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl p-[1px] bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 transition duration-300"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm group-hover:shadow-xl transition">
                  
                  {/* Icon */}
                  <div className="bg-orange-100 text-orange-600 p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition">
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
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

export default AboutSection;