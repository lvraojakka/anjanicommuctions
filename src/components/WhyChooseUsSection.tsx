
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Samsung Authorized Service Center",
  "100% Genuine Spare Parts Guaranteed",
  "Samsung-Certified Expert Technicians",
  "Same-Day Repairs for Most Devices",
  "Transparent Pricing — No Hidden Costs",
  "Post-Service Warranty on All Repairs",
  "10+ Years of Industry Experience",
  "Trusted by 50,000+ Happy Customers",
];

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-us"
      className="py-16 text-white"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm uppercase text-white/70">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            The Authorized Difference
          </h2>
          <p className="text-white/70 mt-3 max-w-xl">
            Trusted Samsung service center with expert technicians and genuine parts.
          </p>
        </div>

        {/* Reasons List */}
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((reason) => (
            <div key={reason} className="flex items-center gap-3">
              <CheckCircle2 size={20} />
              <span>{reason}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;