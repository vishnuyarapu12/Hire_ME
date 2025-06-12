import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya, HR Manager",
    text: "HireME revolutionized our hiring process. The AI features saved us hours of work!",
    image: "", // Add your image URL here
  },
  {
    name: "James, Team Lead",
    text: "We found perfect candidates faster than ever. Highly recommended!",
    image: "",
  },
  {
    name: "Amina, CEO",
    text: "The process is so intuitive. HireME has become a key tool in our team building.",
    image: "",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { name, text, image } = testimonials[index];

  return (
    <section className="bg-[#8aaec6] py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">
          What Our Users Say
        </h2>

        <div className=" p-6 rounded-xl  inline-block max-w-xl transition-all duration-500">
          <img
            src={image}
            alt="User"
            className="w-16 h-16 rounded-full mx-auto mb-4 bg-gray-200"
          />
          <p className="text-gray-800">“{text}”</p>
          <p className="text-sm text-gray-500 mt-2">— {name}</p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
