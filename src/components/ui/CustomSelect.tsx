import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select option",
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);

  // close when click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full text-sm">
      
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 bg-white flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-orange-100 bg-white shadow-lg overflow-hidden animate-fadeIn">
          
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer transition-all duration-200
                ${
                  value === opt.value
                    ? "bg-orange-500 text-white"
                    : "hover:bg-orange-50 text-gray-700"
                }`}
            >
              {opt.label}
            </div>
          ))}

        </div>
      )}
    </div>
  );
}