import { Award, BadgeCheck, Star, Shield } from "lucide-react";

const certifications = [
  { icon: BadgeCheck, label: "Samsung Authorized Service Center" },
  { icon: Award, label: "Best Service Center Award 2023" },
  { icon: Star, label: "5-Star Customer Rated Center" },
  { icon: Shield, label: "ISO 9001 Certified" },
];

const AwardsSection = () => {
  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <div className="mb-16 max-w-2xl mx-auto">
          <p className="text-sm text-orange-500 uppercase tracking-wide">
            Awards & Certifications
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Trusted & Recognized
          </h2>
          <p className="text-gray-600 mt-4">
            Our commitment to quality and excellence is backed by certifications and customer trust.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-400 to-orange-600 hover:scale-105 transition duration-300"
              >
                {/* Inner Card */}
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center shadow-sm group-hover:shadow-xl transition">
                  
                  {/* Icon */}
                  <div className="bg-orange-100 text-orange-600 p-4 rounded-xl mb-4 group-hover:scale-110 transition">
                    <Icon size={30} />
                  </div>

                  {/* Text */}
                  <p className="text-sm font-semibold leading-snug">
                    {item.label}
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

export default AwardsSection;