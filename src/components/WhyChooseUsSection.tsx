import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Authorized Samsung Service",
  "Genuine Spare Parts",
  "Certified Technicians",
  "Same-Day Repairs",
  "Transparent Pricing",
  "Service Warranty",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-orange-50 to-white" id="why-us">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Trusted Samsung service with expert care and genuine parts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {reasons.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <CheckCircle2 size={16} className="text-orange-500" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;