import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Separator } from "../../../../components/ui/separator";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectsSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Navigation menu items data
  const navItems = [
    { name: "Home", active: true, dropdownItems: [] },
    {
      name: "Services",
      active: false,
      dropdownItems: ["Web Development", "Mobile Development", "UI/UX Design", "Cloud Solutions"],
    },
    {
      name: "Projects",
      active: false,
      dropdownItems: ["Web Projects", "Mobile Apps", "Design Portfolio", "Case Studies"],
    },
    { name: "About us", active: false, dropdownItems: [] },
  ];

  // Stats data with animation targets
  const statsData = [
    {
      value: 10,
      prefix: "+",
      title: "Successful Projects",
      description: "Showcasing Innovation, Excellence, and Real-World Impact",
    },
    {
      value: 99,
      suffix: "%",
      title: "In Time Delivery",
      description: "Ensuring Speed, Efficiency, and Reliability in Every Project",
    },
    {
      value: 3,
      prefix: "+",
      title: "Years of Experience",
      description: "A Proven Track Record of Excellence and Innovation",
    },
  ];

  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));

  // Tagline animation
  const taglines = ["Future-Proof", "Next-Level", "Intelligent"];
  const [currentTagline, setCurrentTagline] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Animate stats when in view
  React.useEffect(() => {
    const animateStats = () => {
      statsData.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev];
            newStats[index] = Math.floor(start);
            return newStats;
          });
        }, 16);
      });
    };

    animateStats();
  }, []);

  return (
    <div className="flex flex-col items-start relative self-stretch w-full rounded-[0px_0px_200px_200px] overflow-hidden bg-gradient-to-b from-[#6f27b0] to-[#9334ea]">
      {/* Navigation Bar */}
      <header className="flex w-full items-center justify-between px-4 md:px-8 lg:px-[150px] py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-2.5 py-4">
          <div className="relative w-12 h-12 bg-[url(/g16.png)] bg-[100%_100%]" />
          <div className="text-white text-2xl md:text-[32px] [font-family:'Montserrat',Helvetica] font-extrabold">
            INOVEX
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex w-[638px] items-center justify-between">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.dropdownItems.length > 0 ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="focus:outline-none">
                        <div 
                          className="flex flex-col items-center justify-center group"
                          onMouseEnter={() => setActiveItem(item.name)}
                        >
                          <div className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl text-center whitespace-nowrap transition-all duration-300 group-hover:text-[#e4ccfa]">
                            {item.name}
                          </div>
                          <div
                            className={`relative w-full h-0.5 rounded-[50px] transition-all duration-300 ${
                              activeItem === item.name ? "bg-[#9334ea]" : "bg-transparent"
                            } group-hover:bg-[#9334ea]`}
                          />
                        </div>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="bg-white rounded-lg shadow-lg p-2 min-w-[200px] animate-in fade-in-0 data-[side=bottom]:slide-in-from-top-2"
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem
                          key={dropdownItem}
                          className="px-4 py-2 text-gray-700 hover:bg-[#9334ea] hover:text-white rounded-md cursor-pointer transition-all duration-300"
                        >
                          {dropdownItem}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <button
                    className="focus:outline-none"
                    onClick={() => setActiveItem(item.name)}
                  >
                    <div className="flex flex-col items-center justify-center group">
                      <div className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-2xl text-center whitespace-nowrap transition-all duration-300 group-hover:text-[#e4ccfa]">
                        {item.name}
                      </div>
                      <div
                        className={`relative w-full h-0.5 rounded-[50px] transition-all duration-300 ${
                          activeItem === item.name ? "bg-[#9334ea]" : "bg-transparent"
                        } group-hover:bg-[#9334ea]`}
                      />
                    </div>
                  </button>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
                className="absolute right-0 top-0 h-full w-64 bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col p-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="py-2">
                      {item.dropdownItems.length > 0 ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#9334ea] hover:text-white rounded-md transition-all duration-300">
                            {item.name}
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {item.dropdownItems.map((dropdownItem) => (
                              <DropdownMenuItem
                                key={dropdownItem}
                                className="px-4 py-2 text-gray-700 hover:bg-[#9334ea] hover:text-white"
                              >
                                {dropdownItem}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-[#9334ea] hover:text-white rounded-md transition-all duration-300">
                          {item.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Button */}
        <Button className="hidden lg:flex h-[50px] px-8 py-3.5 bg-[#9334ea] border border-solid border-[#e4ccfa] rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(228,204,250,0.5)] hover:scale-105">
          <span className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-xl">
            Contact us
          </span>
        </Button>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-[150px] py-8 lg:py-0 relative flex-1 self-stretch w-full">
        <div className="flex flex-col items-start justify-center gap-12 max-w-full lg:max-w-[712px]">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <div className="relative">
              <div className="[font-family:'Roboto',Helvetica] font-bold text-white text-3xl md:text-5xl lg:text-[64px] tracking-[0] leading-tight">
                Innovate Your Business with
                <br />
                Technologies
              </div>

              <motion.div
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-4 [font-family:'Roboto',Helvetica] font-bold text-[#d3d3d3] text-2xl md:text-4xl lg:text-[64px] tracking-[0] leading-tight"
              >
                {taglines[currentTagline]}
              </motion.div>
            </div>

            <div className="self-stretch [font-family:'Roboto',Helvetica] font-normal text-white text-lg md:text-xl tracking-[0] leading-[30px] mt-4">
              At INOVEX, we empower businesses through technology. Our mission is
              to deliver innovative software solutions that drive success.
            </div>
          </div>

          <Button className="px-8 py-5 bg-[#9334ea] border-2 border-solid border-[#e4ccfa] rounded-lg hover:shadow-[0_0_30px_rgba(228,204,250,0.6)] transition-all transform hover:scale-105">
            <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl md:text-2xl text-center tracking-[0] leading-6 whitespace-nowrap">
              Let&apos;s build your product
            </span>
          </Button>
        </div>

        <img
          className="relative w-full lg:w-[750px] h-auto lg:h-[750px] object-cover mt-8 lg:mt-0"
          alt="Tech animation"
          src="/https---lottiefiles-com-animations-tech-tlrvi4vwse.png"
        />
      </div>

      {/* Stats Section */}
      <div className="flex flex-col h-auto lg:h-[450px] items-start gap-2 p-4 md:p-[50px] relative self-stretch w-full">
        <Card className="flex items-center justify-center relative flex-1 self-stretch w-full bg-white rounded-[20px] lg:rounded-[150px]">
          <CardContent className="flex flex-col lg:flex-row w-full items-center justify-between px-4 md:px-8 lg:px-[100px] py-8 lg:py-0 gap-8 lg:gap-0">
            {statsData.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center gap-6 lg:gap-10 flex-1 self-stretch">
                  <div className="relative w-[136px] h-[78px]">
                    <div className="relative h-[104px] top-[-13px]">
                      <img
                        className="absolute w-[120px] h-[104px] top-0 left-2.5"
                        alt="Vector"
                        src="/vector.svg"
                      />
                      <motion.div
                        className="absolute top-3 left-0 [font-family:'Montserrat',Helvetica] font-semibold text-black text-[64px] text-center tracking-[0] leading-[normal]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.prefix || ""}
                        {animatedStats[index]}
                        {stat.suffix || ""}
                      </motion.div>
                    </div>
                  </div>

                  <div className="relative self-stretch [font-family:'Montserrat',Helvetica] font-normal text-black text-xl lg:text-[32px] text-center tracking-[0] leading-[normal]">
                    <span className="font-bold">
                      {stat.title}
                      <br />
                    </span>
                    <span className="font-semibold text-lg lg:text-2xl">
                      <br />
                      {stat.description}
                    </span>
                  </div>
                </div>

                {index < statsData.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="hidden lg:block h-10 bg-[#9334ea]"
                  />
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};