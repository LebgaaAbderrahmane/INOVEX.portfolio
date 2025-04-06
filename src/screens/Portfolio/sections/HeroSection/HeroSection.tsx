import React, { useState } from "react";
import { motion } from "framer-motion";

export const HeroSection = (): JSX.Element => {
  // Team member data
  const teamMembers = [
    { 
      id: 1, 
      imageSrc: "/frame-2147223282.svg", 
      alt: "Team member 1",
      name: "John Doe",
      role: "UI/UX Designer"
    },
    { 
      id: 2, 
      imageSrc: "/frame-2147223283.svg", 
      alt: "Team member 2",
      name: "Jane Smith",
      role: "Full Stack Developer"
    },
    { 
      id: 3, 
      imageSrc: "/frame-2147223284.svg", 
      alt: "Team member 3",
      name: "Mike Johnson",
      role: "Product Manager"
    },
  ];

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-start relative w-full bg-[#6f27b1]">
      <div className="flex flex-col items-start relative w-full bg-white rounded-[0px_0px_200px_200px] overflow-hidden">
        <div className="flex flex-col w-full items-center gap-8 px-4 md:px-8 lg:px-[150px] py-16 relative">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-base-02 text-3xl md:text-4xl lg:text-[52px] text-center tracking-[-2.00px] leading-[1.2]">
            Meet our team
          </h2>

          <p className="max-w-[974px] font-['Montserrat',Helvetica] font-normal text-gray-600 text-lg md:text-xl lg:text-2xl text-center leading-[1.6]">
            Clarity provides the essential building blocks and components to
            help you create a polished website, mobile app, or software solution
            for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-8 relative">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="relative group"
                onHoverStart={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <motion.div
                  className="relative w-[300px] md:w-[350px] lg:w-[464px] aspect-square rounded-3xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[#9334ea] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  />
                  <img
                    className="w-full h-full object-cover"
                    alt={member.alt}
                    src={member.imageSrc}
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg p-4 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-300 min-w-[200px]"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: hoveredMember === member.id ? 1 : 0.8,
                    opacity: hoveredMember === member.id ? 1 : 0,
                  }}
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 55% 75%, 50% 100%, 45% 75%, 0% 75%)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-center text-[#9334ea] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {member.role}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};