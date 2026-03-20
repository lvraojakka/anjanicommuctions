
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

/* ---------------- FAQ DATA (SEO OPTIMIZED) ---------------- */
const faqs = [
  {
    q: "Where can I buy Samsung Extended Warranty in Bhimavaram?",
    a: "You can purchase Samsung Extended Warranty at Anjani Communications, an authorized Samsung service center in Bhimavaram. Our experts will guide you.",
  },
  {
    q: "Can I get Samsung Extended Warranty after purchase?",
    a: "Yes, you can buy it within the eligible period before your standard warranty expires.",
  },
  {
    q: "How do I check my Samsung warranty status?",
    a: "You can check using IMEI or serial number at Anjani Communications or official Samsung support.",
  },
  {
    q: "Is Samsung Extended Warranty worth it in India?",
    a: "Yes, it protects you from unexpected repair costs and ensures genuine parts replacement.",
  },
  {
    q: "What is covered under Samsung Extended Warranty?",
    a: "It covers manufacturing defects, hardware failures, and repair services with genuine Samsung parts.",
  },
  {
    q: "Does Samsung Extended Warranty cover screen damage?",
    a: "Screen damage is usually not covered unless you have an additional protection plan.",
  },
  {
    q: "How much does Samsung Extended Warranty cost?",
    a: "Pricing depends on your device model. Visit Anjani Communications in Bhimavaram for exact pricing.",
  },
  {
    q: "Which Samsung products are eligible for extended warranty?",
    a: "Smartphones, TVs, refrigerators, washing machines, and more depending on eligibility.",
  },
  {
    q: "Why choose Anjani Communications Samsung Service Center?",
    a: "We offer certified technicians, genuine parts, fast service, and trusted Samsung-authorized support.",
  },
  {
    q: "How long is Samsung Extended Warranty valid?",
    a: "It usually extends warranty by 1 to 2 years based on your plan.",
  },
];

/* ---------------- SEO SCHEMA (DYNAMIC) ---------------- */
const FAQSchema = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    });

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

/* ---------------- MAIN COMPONENT ---------------- */
const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="py-16 bg-gradient-to-b from-white to-orange-50"
    >
      <FAQSchema />

      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Samsung Extended Warranty FAQ's
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Find answers to common questions about Samsung warranty & service.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search your question..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm"
        />

        {/* FAQ LIST */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`group rounded-2xl border transition-all duration-300 overflow-hidden
                ${
                  isOpen
                    ? "bg-white border-orange-200 shadow-md"
                    : "bg-white/80 backdrop-blur border-gray-200 hover:border-orange-200 hover:shadow-sm"
                }`}
              >
                {/* Accent line */}
                <div
                  className={`h-[2px] ${
                    isOpen ? "bg-orange-500" : "bg-transparent"
                  }`}
                />

                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left"
                >
                  <span className="font-medium text-gray-900 text-sm md:text-base">
                    {faq.q}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-orange-500"
                        : "text-gray-400 group-hover:text-orange-400"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hidden SEO Boost */}
        <p className="text-xs text-gray-400 mt-10 text-center max-w-2xl mx-auto">
          Anjani Communications is a Samsung Authorized Service Center in
          Bhimavaram offering expert repair services, genuine spare parts, and
          extended warranty support for mobiles, TVs, and home appliances.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;