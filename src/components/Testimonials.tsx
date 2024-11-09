'use client'
import React, { useState } from "react";
import Image from "next/image";
const testimonialPages = [
  [
    {
      name: "Roger Scott",
      role: "Marketing Manager",
      imageUrl: "/E6.png",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: false,
    },
    {
      name: "Robit Nio",
      role: "Marketing Manager",
      imageUrl: "/E7.png",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: true,
    },
    {
      name: "Hexarider",
      role: "Marketing Manager",
      imageUrl: "/E8.png",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: false,
    },
  ],
  [
    {
      name: "Roger Scott",
      role: "Marketing Manager",
      imageUrl: "/E8.png",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: false,
    },
    {
      name: "Robit Nio",
      role: "Marketing Manager",
      imageUrl: "/E7.png",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: true,
    },
    {
      name: "Hexarider",
      role: "Marketing Manager",
      imageUrl: "/E6.png",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      highlight: false,
    },
  ],
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <p className="text-custom-yellow uppercase font-semibold">Testimonial</p>
        <h2 className="text-3xl font-bold text-gray-900">Happy Clients</h2>
      </div>
      <div className="flex justify-center gap-6">
        {testimonialPages[currentPage].map((testimonial, index) => (
          <div
            key={index}
            className={`group w-96 h-[400px] p-8 rounded-lg shadow-lg transition-colors duration-300 ${
              testimonial.highlight
                ? "bg-white text-black hover:bg-custom-yellow hover:text-white"
                : "bg-white text-gray-900 hover:bg-custom-yellow hover:text-white"
            }`}
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full border-2 border-gray-300 mr-4"
              />
              <div>
                <h4 className="font-bold text-3xl">{testimonial.name.toUpperCase()}</h4>
                <p
                  className={`text-xl text-custom-yellow transition-colors duration-300 group-hover:text-white`}
                >
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-[25px] mt-10 ml-5">{testimonial.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        {testimonialPages.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={`h-2 w-6 rounded-full transition-colors duration-300 ${
              currentPage === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial page ${index + 1}`} // Accessible label
          >
        
          </button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
