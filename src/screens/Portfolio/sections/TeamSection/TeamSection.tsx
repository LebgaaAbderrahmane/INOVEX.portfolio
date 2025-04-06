import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Service data for mapping
const services = [
  {
    id: 1,
    title: "UI/UX Design",
    subtitle: "User-Centric & Engaging Interfaces",
    description:
      "Great design is at the core of user experience. We create visually stunning and highly intuitive designs that elevate usability, ensuring your digital product keeps users engaged.",
    iconSrc: "/fluent-design-ideas-32-regular.svg",
    iconAlt: "Fluent design ideas",
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Modern, Scalable & High-Performance",
    description:
      "We build fast, secure and scalable websites tailored to your needs. Using the latest technologies, we ensure seamless experiences across all devices while focusing on performance and SEO.",
    iconSrc: "/fluent-mdl2-site-scan.svg",
    iconAlt: "Fluent site",
  },
  {
    id: 3,
    title: "Mobile Development",
    subtitle: "Cross-Platform & Native Experiences",
    description:
      "From concept to launch, we craft powerful mobile applications that provide a smooth user experience. Whether it's iOS, Android, or cross-platform, we turn your ideas into functional, intuitive apps.",
    iconSrc: "/icomoon-free-mobile2.svg",
    iconAlt: "Icomoon free",
  },
];

export const TeamSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const getCardPosition = (index: number) => {
    const positions = {
      left: { x: "-100%", scale: 0.8, zIndex: 0 },
      center: { x: "0%", scale: 1, zIndex: 2 },
      right: { x: "100%", scale: 0.8, zIndex: 0 },
    };

    const normalizedIndex = ((index - activeIndex + 3) % 3);
    if (normalizedIndex === 0) return positions.left;
    if (normalizedIndex === 1) return positions.center;
    return positions.right;
  };

  return (
    <section className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] bg-gradient-to-b from-[#6f27b0] to-[#9334ea]">
      <div className="flex flex-col items-start gap-2 relative self-stretch w-full bg-white rounded-[0px_0px_200px_200px] overflow-hidden">
        <div className="flex flex-col w-full items-center gap-16 px-4 md:px-8 lg:px-[150px] py-16 relative">
          <h2 className="font-['Montserrat',Helvetica] font-semibold text-black text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-[normal]">
            Our Services
          </h2>

          <p className="max-w-[762px] font-['Montserrat',Helvetica] font-normal text-black text-lg md:text-xl lg:text-2xl text-center tracking-[0] leading-[30px]">
            We deliver innovative solutions with expert execution, helping you
            achieve your goals with precision and quality
          </p>

          <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="absolute w-full max-w-[400px] cursor-pointer"
                  initial={getCardPosition(index)}
                  animate={getCardPosition(index)}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => handleCardClick(index)}
                  style={{ zIndex: getCardPosition(index).zIndex }}
                >
                  <Card className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="p-8 flex flex-col gap-6">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-[#9334ea] bg-opacity-10 rounded-full flex items-center justify-center">
                          <img
                            src={service.iconSrc}
                            alt={service.iconAlt}
                            className="w-8 h-8"
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {service.title}
                        </h3>
                      </div>

                      {/* Subtitle */}
                      <p className="text-xl font-medium text-[#9334ea]">
                        {service.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <Button
                        className={`mt-4 w-full transition-all duration-300 ${
                          index === activeIndex
                            ? "bg-[#9334ea] text-white hover:bg-[#7928c9]"
                            : "bg-white text-[#9334ea] border border-[#9334ea] hover:bg-[#9334ea] hover:text-white"
                        } hover:shadow-[0_0_20px_rgba(147,52,234,0.3)]`}
                      >
                        Get Started
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#9334ea] w-6"
                    : "bg-gray-300 hover:bg-[#9334ea] hover:opacity-70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};