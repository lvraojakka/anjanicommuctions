import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
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
 Issue: ${form.message}`;

  const whatsappUrl = `https://wa.me/918185816666?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  // reset form
  setForm({ name: "", email: "", phone: "", message: "" });
};

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-orange-500 uppercase tracking-wide">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold mt-3">
            Let’s Connect
          </h2>
          <p className="text-gray-600 mt-4">
            Reach out for fast and reliable Samsung service support.
          </p>
        </div>

       <div className="grid md:grid-cols-2 gap-10 items-stretch">

  {/* LEFT SIDE */}
  <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-400 to-orange-600">
    <div className="h-full rounded-3xl bg-white/90 backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between shadow-xl">

      {/* Info */}
      <div className="space-y-5">

        <div className="flex gap-4 items-start">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <MapPin size={20} />
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Door No, 16/5/6, PP Rd, opposite Raymonds Show Room,<br/>
            Bhimavaram, Andhra Pradesh 534201
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <Phone size={20} />
          </div>
          <a href="tel:8185816666" className="text-gray-800 font-medium">
            8185816666
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
            <Mail size={20} />
          </div>
          <a href="mailto:anjanihhp@gmail.com" className="text-gray-800 font-medium">
            anjanihhp@gmail.com
          </a>
        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <a
          href="tel:8185816666"
          className="flex-1 text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition"
        >
          Call Now
        </a>

        {/* <a
          href="https://wa.me/918185816666"
          target="_blank"
          className="flex-1 text-center border border-orange-500 text-orange-500 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-orange-50 transition"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a> */}
      </div>

      {/* Map */}
      <div className="mt-6 rounded-2xl overflow-hidden h-52">
        <iframe
          src="https://maps.google.com/maps?q=Anjani%20Communications%20Bhimavaram&z=15&output=embed"
          className="w-full h-full"
          loading="lazy"
        />
      </div>

    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-400 to-orange-600">
    <form
      onSubmit={handleSubmit}
      className="h-full rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-xl flex flex-col justify-between space-y-5"
    >
      <h3 className="text-xl font-semibold">Send a Message</h3>

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />

      <textarea
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full border rounded-xl px-4 py-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
        required
      />

     <button
  type="submit"
  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition shadow-lg"
>
  <MessageCircle size={18} className="opacity-90" />
  <span className="tracking-wide">Send Message</span>
</button>
    </form>
  </div>

</div>
      </div>
    </section>
  );
};

export default ContactSection;