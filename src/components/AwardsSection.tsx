import { Award, BadgeCheck, Star, Shield } from "lucide-react";

const certifications = [
  { icon: BadgeCheck, label: "Authorized Service" },
  { icon: Award, label: "Best Service 2023" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "ISO Certified" },
];

const AwardsSection = () => {
  return (
    <section className="py-16 bg-white" id="awards">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <div className="mb-10 max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Awards & Certifications
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Recognized for quality service and customer trust.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {certifications.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-gray-50 p-5 rounded-xl hover:shadow-md hover:scale-[1.03] transition"
              >
                
                {/* Icon */}
                <div className="mb-3 p-2 w-fit mx-auto rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <p className="text-xs font-semibold text-gray-800">
                  {item.label}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;