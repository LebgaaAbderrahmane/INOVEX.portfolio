import { MoveRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const ServicesSection = (): JSX.Element => {
  // Project data for mapping
  const projects = [
    {
      id: 1,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: "/case-study--image.png",
      bgColor: "bg-[#f1f1ff]",
      borderColor: "border-[#e7daec]",
    },
    {
      id: 2,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: "/case-study--image-1.png",
      bgColor: "bg-[#f0fff7]",
      borderColor: "border-[#e7daec]",
    },
    {
      id: 3,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      image: "/case-study--image-2.png",
      bgColor: "bg-[#fff4f4]",
      borderColor: "border-[#e7daec]",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-2 px-4 md:px-16 lg:px-[150px] py-0 relative w-full rounded-[0px_0px_200px_200px] overflow-hidden bg-gradient-to-b from-[#6f27b0] to-[#9334ea]">
      <div className="flex flex-col items-center gap-16 py-16 relative w-full">
        <h2 className="font-['Montserrat',Helvetica] font-semibold text-white text-3xl md:text-4xl lg:text-5xl text-center">
          Explore our projects
        </h2>

        <p className="max-w-[992px] font-['Montserrat',Helvetica] font-normal text-white text-lg md:text-xl lg:text-2xl text-center leading-[30px]">
          Discover a collection of our latest projects, showcasing creativity,
          and expertise across various industries. Explore our work and see how
          we bring ideas to life
        </p>

        <div className="flex flex-col w-full max-w-[1620px] gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`relative flex flex-col lg:flex-row h-auto lg:h-[540px] w-full border-0 shadow-none overflow-hidden`}
            >
              <img
                className="w-full lg:w-[790px] h-[300px] lg:h-[540px] object-cover"
                alt="Case study image"
                src={project.image}
              />
              <div
                className={`flex-1 ${project.bgColor} rounded-[30px] lg:rounded-[60px] border border-solid ${project.borderColor}`}
              >
                <CardContent
                  className={`flex flex-col items-start justify-center gap-[30px] lg:gap-[60px] h-full p-6 lg:p-8 ${project.bgColor}`}
                >
                  <div className="flex flex-col items-start gap-4 lg:gap-[30px]">
                    <h3 className="font-['Montserrat',Helvetica] font-semibold text-[#2d3748] text-2xl lg:text-[32px] leading-[1.2] lg:leading-[43.5px]">
                      {project.title}
                    </h3>
                    <p className="w-full max-w-[529px] font-['Montserrat',Helvetica] font-normal text-black text-sm lg:text-base leading-[1.6] lg:leading-[25.9px]">
                      {project.description}
                    </p>
                  </div>
                  <motion.div 
                    className="flex items-center gap-[5px] cursor-pointer group"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="font-['Montserrat',Helvetica] font-semibold text-[#9334ea] text-base leading-[14px] group-hover:text-[#7928c9] transition-colors">
                      Read more
                    </span>
                    <MoveRightIcon className="w-6 h-6 text-[#9334ea] group-hover:text-[#7928c9] transition-colors" />
                  </motion.div>
                </CardContent>
              </div>
            </Card>
          ))}

          <motion.div 
            className="flex items-center gap-3 pt-8 cursor-pointer self-end group"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-['Inter',Helvetica] font-semibold text-white text-xl lg:text-2xl leading-[32.8px] group-hover:text-[#e4ccfa] transition-colors">
              Explore more projects
            </span>
            <MoveRightIcon className="w-[27px] h-[27px] text-white group-hover:text-[#e4ccfa] transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};