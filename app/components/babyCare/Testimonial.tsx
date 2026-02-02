"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "../common-ui/SectionHeading";
import { useMediaQuery } from "react-responsive";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Kathmandu",
      text: "Zuvara products have been a game-changer for my baby's sensitive skin. I've tried many brands, but nothing compares to the natural ingredients and gentle care.",
      rating: 5,
      image: "/images/parent/parent2.png",
    },
    {
      id: 2,
      name: "Anita Poudel",
      location: "Pokhara",
      text: "My daughter has extremely sensitive skin, and Zuvara is the only brand that doesn't cause any irritation. Highly recommended for all Nepali mothers!",
      rating: 5,
      image: "/images/parent/parent.png",
    },
    {
      id: 3,
      name: "Sneha Gurung",
      location: "Bhaktapur",
      text: "Affordable, trustworthy, and effective. I love that Zuvara is a Nepali brand that understands our needs and delivers quality products.",
      rating: 5,
      image: "/images/parent/parent2.png",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Icon
        key={i}
        icon="mdi:star"
        width="16"
        height="16"
        className={i < rating ? "text-[#8cd700]" : "text-zinc-300"}
      />
    ));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  const isSmallerDevice = useMediaQuery({ maxWidth: 1000 });

  return (
    <section className="py-4 lg:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-8 flex justify-center items-start md:items-center gap-4 flex-col lg:flex-row"
        >
          <SectionHeading
            title="What"
            highlight="Nepali Mothers Say"
            description="Real reviews from real mothers who trust Zuvara"
            align={isSmallerDevice ? "left" : "center"}
            descClassName="text-left lg:text-center"
          />
          {/* Google Review Button */}
          {/* <div className="flex justify-center">
            <Button
              content="Read Reviews on Google"
              link="https://www.google.com/search?q=zuvara"
              icon="mdi:google"
            />
          </div> */}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-60 md:h-70 lg:h-92 rounded-2xl overflow-hidden border border-zinc-200"
              style={{
                backgroundImage: `url(${currentTestimonial.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></motion.div>
          </motion.div>

          {/* Right Side - Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-2 lg:space-y-4"
          >
            {/* Author Info */}
            <div>
              <h4 className="font-semibold text-foreground text-lg">
                {currentTestimonial.name}
              </h4>
              <p className="text-sm text-zinc-600">
                {currentTestimonial.location}
              </p>
            </div>

            {/* Stars */}
            <div className="flex gap-1">
              {renderStars(currentTestimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className="text-zinc-600 leading-relaxed lg:text-lg italic">
              &quot;{currentTestimonial.text}&quot;
            </p>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-4 justify-center">
                <button
                  onClick={goToPrevious}
                  className="lg:p-3 rounded-full border border-[#8cd700] hover:bg-[#8cd700] hover:text-white transition-all duration-300 flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <Icon icon="mdi:chevron-left" width="20" height="20" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-[#8cd700] w-8"
                          : "bg-zinc-300 w-2"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  className="p-3 rounded-full border border-[#8cd700] hover:bg-[#8cd700] hover:text-white transition-all duration-300 flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <Icon icon="mdi:chevron-right" width="20" height="20" />
                </button>
              </div>
              {/* Counter */}
              <p className="text-sm text-zinc-500">
                {currentIndex + 1} / {testimonials.length}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
