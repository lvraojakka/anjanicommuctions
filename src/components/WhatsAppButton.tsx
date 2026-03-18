import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat with us
      </span>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-30 group-hover:opacity-60 transition"></div>

      {/* Button */}
      <a
        href="https://wa.me/918185816666?text=Hi%2C%20I%20need%20Samsung%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-xl hover:scale-110 transition duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
