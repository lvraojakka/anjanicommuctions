import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import CustomSelect from "./ui/CustomSelect";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    category: "",
    message: "",
  });

 const categoryOptions = [
  { label: "Air Conditioner", value: "Air Conditioner" },
  { label: "Mobile", value: "Mobile" },
  { label: "Microwave Oven", value: "Microwave Oven" },
  { label: "Refrigerator", value: "Refrigerator" },
  { label: "Television (TV)", value: "Television (TV)" },
  { label: "Warranty Related", value: "Warranty Related" },
  { label: "Washing Machine", value: "Washing Machine" },
  { label: "Others", value: "Others" },
];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Enter valid Indian phone number");
      return;
    }

    const message = `*New Service Request*

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Location: ${form.location}
Category: ${form.category}
Issue: ${form.message}`;

    const whatsappUrl = `https://wa.me/918185816666?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      email: "",
      phone: "",
      location: "",
      category: "",
      message: "",
    });
  };

  return (
    <section
      className="py-14 bg-gradient-to-b from-white to-orange-50"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs text-orange-500 uppercase tracking-widest">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-2 tracking-tight">
            Let’s Connect
          </h2>

          <p className="text-gray-600 mt-3 text-sm">
            Reach out for fast and reliable Samsung service support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* LEFT */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-orange-400 to-orange-600">
            <div className="h-full rounded-2xl bg-white/95 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col justify-between transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <MapPin size={18} />
                  </div>

                  <div className="text-gray-700 text-sm leading-relaxed">
                    <p className="font-semibold text-base bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      Anjani Communications
                    </p>
                    <p className="mt-1">
                      Door No, 16/5/6, PP Rd, opposite Raymonds Show Room,
                      <br />
                      Bhimavaram, Andhra Pradesh 534201
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Phone size={18} />
                  </div>
                  <a
                    href="tel:8185816666"
                    className="text-gray-800 font-medium text-sm hover:text-orange-600 transition"
                  >
                    8185816666
                  </a>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                    <Mail size={18} />
                  </div>
                  <a
                    href="mailto:anjaninhhp@gmail.com"
                    className="text-gray-800 font-medium text-sm hover:text-orange-600 transition"
                  >
                    anjaninhhp@gmail.com
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="tel:8185816666"
                  className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
                >
                  Call
                </a>

                <a
                  href="mailto:anjaninhhp@gmail.com"
                  className="text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
                >
                  Email
                </a>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-xl overflow-hidden h-44">
                <iframe
                  src="https://maps.google.com/maps?q=Anjani%20Communications%20Bhimavaram&z=15&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-orange-400 to-orange-600">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-2xl bg-white/95 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] space-y-4 transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                Book Service
              </h3>

              {/* Inputs */}
              {[
                { type: "text", placeholder: "Full Name*", key: "name" },
                { type: "email", placeholder: "Email Address*", key: "email" },
                { type: "tel", placeholder: "Phone Number*", key: "phone" },
                { type: "text", placeholder: "Location*", key: "location" },
              ].map((input) => (
                <input
                  key={input.key}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={form[input.key]}
                  onChange={(e) =>
                    setForm({ ...form, [input.key]: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-200"
                  required
                />
              ))}
              {/* Category Select */}
              <CustomSelect
                options={categoryOptions}
                value={form.category}
                onChange={(val) => setForm({ ...form, category: val })}
                placeholder="Select Product Category*"
              />

              <textarea
                placeholder="Describe your issue...*"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  const el = e.target;
                  el.style.height = "auto";
                  el.style.height = el.scrollHeight + "px";
                }}
                rows={3}
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm"
              >
                <MessageCircle size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
