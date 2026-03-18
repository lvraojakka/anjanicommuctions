import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "K Hari",
    text: "Good AC servicing with proper cleaning and inspection improves performance and lifespan.",
  },
  {
    name: "Sandrani Geetha",
    text: "Very good service. Part replacement done in warranty. I'm very happy.",
  },
  {
    name: "Ravi Kumar",
    text: "Excellent Samsung service. Quick repair and genuine parts.",
  },
  {
    name: "Lakshmi Devi",
    text: "Trusted service center in Bhimavaram. Highly recommended.",
  },
];

const ReviewsSection = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
  };

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">

        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <img src="/google-logo.png" className="h-6" />
          <span className="text-sm text-gray-500">Google Reviews</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Customer Reviews
        </h2>

        <p className="text-gray-500 text-sm mt-2 mb-8">
          ⭐ 4.8 / 5 based on 2500+ reviews
        </p>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stopSlider}
          onMouseLeave={startSlider}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((review, i) => (
              <div key={i} className="min-w-full px-2">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">

                  {/* Stars */}
                  <div className="flex justify-center mb-3 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    "{review.text}"
                  </p>

                  {/* Name */}
                  <p className="text-sm font-medium text-gray-900">
                    {review.name}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition ${
                i === index ? "bg-orange-500 w-4" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* Link */}
        <a
          href="https://maps.app.goo.gl/vGkXBpZy3E7ouH678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-orange-500 text-sm font-medium hover:underline"
        >
          View all reviews →
        </a>

      </div>
    </section>
  );
};

export default ReviewsSection;