import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-8 h-8" />,
      text: "USTHB Algeirs, Algeria",
    },
    { icon: <PhoneIcon className="w-8 h-8" />, text: "+213 796 269 301" },
    { icon: <MailIcon className="w-8 h-8" />, text: "inovexdz@gmail.com" },
  ];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon className="w-5 h-5 text-white" />, alt: "Facebook" },
    {
      icon: <InstagramIcon className="w-5 h-5 text-white" />,
      alt: "Instagram",
    },
    { icon: <LinkedinIcon className="w-5 h-5 text-white" />, alt: "LinkedIn" },
  ];

  return (
    <section className="flex flex-col items-start relative w-full">
      {/* Contact Form Section with Background */}
      <div
        className="flex flex-col items-center relative w-full rounded-[0px_0px_200px_200px] overflow-hidden py-16"
        style={{
          backgroundImage: "url(../frame-2147223267.png)",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <div className="flex flex-col items-center gap-8 px-[150px] w-full max-w-[1920px]">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-white text-[52px] tracking-[-2.00px] leading-[62px]">
            Get in touch
          </h2>

          <p className="w-full max-w-[702px] font-['Montserrat',Helvetica] font-normal text-white text-2xl text-center leading-[30px]">
            Have a project or a business? Contact us to discuss how we can
            collaborate and bring your ideas to life.
          </p>

          <div className="flex items-center justify-between w-full">
            {/* Contact Form */}
            <div className="flex flex-col items-center justify-center gap-[50px] flex-1">
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col w-[422px] h-[100px] items-center justify-center">
                  <label className="self-stretch font-['Montserrat',Helvetica] font-normal text-white text-xl mb-2">
                    Email <span className="text-[#ff0000]">*</span>
                  </label>
                  <Input
                    className="flex-1 self-stretch w-full bg-white rounded-lg border-2 border-solid border-[#9334ea] shadow-[0px_0px_1px_#00000040]"
                    type="email"
                  />
                </div>

                <div className="flex flex-col w-[422px] h-[150px] items-center justify-center">
                  <label className="self-stretch h-14 font-['Montserrat',Helvetica] font-normal text-white text-xl mb-2">
                    Message <span className="text-[#ff0000]">*</span>
                  </label>
                  <Textarea className="flex-1 self-stretch w-full bg-white rounded-lg border-2 border-solid border-[#9334ea] shadow-[0px_0px_1px_#00000040]" />
                </div>

                <Button className="w-[422px] justify-center px-8 py-5 mt-4 bg-[#9334ea] border-2 border-solid border-[#e4ccfa] shadow-[-4px_-4px_20px_#e4ccfa40,4px_4px_20px_#e4ccfa40] rounded-lg font-['Montserrat',Helvetica] font-medium text-white text-2xl">
                  Submit
                </Button>
              </div>
            </div>

            {/* Illustration */}
            <div className="flex items-center justify-center flex-1">
              <div className="relative w-[500px] h-[500px]">
                <div className="relative w-[431px] h-[373px] top-[59px] left-[38px]">
                  <div className="absolute w-[423px] h-[369px] top-0 left-px bg-[url(/vector-25.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[423px] h-[369px] top-0 left-0"
                      alt="Group"
                      src="/group-4.png"
                    />
                  </div>

                  <img
                    className="absolute w-[431px] h-px top-[368px] left-0 object-cover"
                    alt="Freepik floor inject"
                    src="/freepik--floor--inject-62.png"
                  />

                  <img
                    className="absolute w-60 h-[246px] top-[123px] left-[107px]"
                    alt="Freepik plants"
                    src="/freepik--plants--inject-62.png"
                  />

                  <img
                    className="absolute w-[406px] h-[230px] top-[13px] left-[15px]"
                    alt="Freepik building"
                    src="/freepik--building--inject-62.png"
                  />

                  <img
                    className="absolute w-[193px] h-[125px] top-[243px] left-0"
                    alt="Freepik mail inject"
                    src="/freepik--mail--inject-62.png"
                  />

                  <img
                    className="absolute w-[151px] h-[289px] top-[79px] left-[157px]"
                    alt="Freepik device"
                    src="/freepik--device--inject-62.png"
                  />

                  <img
                    className="absolute w-[87px] h-[124px] top-32 left-7"
                    alt="Freepik character"
                    src="/freepik--character-1--inject-62.png"
                  />

                  <div className="absolute w-[119px] h-[247px] top-[126px] left-[305px]">
                    <div className="relative w-[120px] h-[248px]">
                      <img
                        className="absolute w-[43px] h-[47px] top-[23px] left-0"
                        alt="Vector"
                        src="/vector-13.svg"
                      />

                      <img
                        className="absolute w-[43px] h-[47px] top-[23px] left-0"
                        alt="Clip path group"
                        src="/clip-path-group.png"
                      />

                      <img
                        className="absolute w-11 h-12 top-[23px] left-0"
                        alt="Vector"
                        src="/vector-50.svg"
                      />

                      <img
                        className="absolute w-[47px] h-[78px] top-[47px] left-9"
                        alt="Vector"
                        src="/vector-5.svg"
                      />

                      <img
                        className="absolute w-[47px] h-[78px] top-[47px] left-9"
                        alt="Clip path group"
                        src="/clip-path-group-1.png"
                      />

                      <img
                        className="absolute w-12 h-[79px] top-[46px] left-9"
                        alt="Vector"
                        src="/vector-3.svg"
                      />

                      <img
                        className="absolute w-[23px] h-[21px] top-11 left-[47px]"
                        alt="Vector"
                        src="/vector-29.svg"
                      />

                      <img
                        className="absolute w-5 h-[38px] top-12 left-[79px]"
                        alt="Vector"
                        src="/vector-7.svg"
                      />

                      <img
                        className="absolute w-5 h-[38px] top-12 left-[79px]"
                        alt="Clip path group"
                        src="/clip-path-group-2.png"
                      />

                      <img
                        className="absolute w-[21px] h-[39px] top-[47px] left-[78px]"
                        alt="Vector"
                        src="/vector-32.svg"
                      />

                      <img
                        className="absolute w-4 h-[45px] top-11 left-[88px]"
                        alt="Vector"
                        src="/vector-33.svg"
                      />

                      <img
                        className="absolute w-4 h-[9px] top-12 left-[27px]"
                        alt="Vector"
                        src="/vector-10.svg"
                      />

                      <img
                        className="absolute w-1 h-1.5 top-[55px] left-2"
                        alt="Vector"
                        src="/vector-27.svg"
                      />

                      <img
                        className="absolute w-[30px] h-2.5 top-[94px] left-[45px]"
                        alt="Vector"
                        src="/vector-15.svg"
                      />

                      <img
                        className="absolute w-[17px] h-0.5 top-[107px] left-[50px]"
                        alt="Vector"
                        src="/vector-26.svg"
                      />

                      <img
                        className="absolute w-1.5 h-[7px] top-[62px] left-[75px]"
                        alt="Vector"
                        src="/vector-51.svg"
                      />

                      <img
                        className="absolute w-[17px] h-[15px] top-[233px] left-[101px]"
                        alt="Vector"
                        src="/vector-40.svg"
                      />

                      <img
                        className="absolute w-[11px] h-[22px] top-[226px] left-[94px]"
                        alt="Vector"
                        src="/vector-21.svg"
                      />

                      <img
                        className="absolute w-[51px] h-[121px] top-[110px] left-[69px]"
                        alt="Vector"
                        src="/vector-12.svg"
                      />

                      <img
                        className="absolute w-[65px] h-[132px] top-[106px] left-[47px]"
                        alt="Vector"
                        src="/vector-43.svg"
                      />

                      <img
                        className="absolute w-[5px] h-1.5 top-[182px] left-[114px]"
                        alt="Vector"
                        src="/vector-18.svg"
                      />

                      <img
                        className="absolute w-0.5 h-0.5 top-[179px] left-[118px]"
                        alt="Vector"
                        src="/vector-53.svg"
                      />

                      <img
                        className="absolute w-1.5 h-5 top-[117px] left-[74px]"
                        alt="Vector"
                        src="/vector-47.svg"
                      />

                      <img
                        className="absolute w-[5px] h-[17px] top-[122px] left-[54px]"
                        alt="Vector"
                        src="/vector-46.svg"
                      />

                      <img
                        className="absolute w-[9px] h-2 top-[113px] left-[81px]"
                        alt="Vector"
                        src="/vector-49.svg"
                      />

                      <img
                        className="absolute w-[13px] h-[30px] top-[123px] left-[73px]"
                        alt="Vector"
                        src="/vector-52.svg"
                      />

                      <img
                        className="absolute w-0.5 h-[3px] top-[119px] left-[71px]"
                        alt="Vector"
                        src="/vector-23.svg"
                      />

                      <img
                        className="absolute w-[7px] h-2.5 top-[178px] left-[100px]"
                        alt="Vector"
                        src="/vector-23.svg"
                      />

                      <img
                        className="absolute w-[7px] h-[15px] top-[181px] left-[102px]"
                        alt="Vector"
                        src="/vector-30.svg"
                      />

                      <img
                        className="absolute w-[27px] h-[59px] top-[123px] left-[51px]"
                        alt="Vector"
                        src="/vector-20.svg"
                      />

                      <img
                        className="absolute w-0.5 h-[3px] top-[184px] left-[78px]"
                        alt="Vector"
                        src="/vector-28.svg"
                      />

                      <img
                        className="absolute w-[27px] h-[50px] top-[188px] left-[79px]"
                        alt="Vector"
                        src="/vector-16.svg"
                      />

                      <img
                        className="absolute w-2 h-[21px] top-[198px] left-[100px]"
                        alt="Vector"
                        src="/vector-17.svg"
                      />

                      <img
                        className="absolute w-[23px] h-[15px] top-[30px] left-[74px]"
                        alt="Vector"
                        src="/vector-41.svg"
                      />

                      <img
                        className="absolute w-2 h-6 top-0 left-px"
                        alt="Vector"
                        src="/vector-24.svg"
                      />

                      <img
                        className="absolute w-0.5 h-[3px] top-3 left-1.5"
                        alt="Vector"
                        src="/vector-38.svg"
                      />

                      <img
                        className="absolute w-[17px] h-[29px] top-8 left-12"
                        alt="Vector"
                        src="/vector-22.svg"
                      />

                      <img
                        className="absolute w-[13px] h-[11px] top-[38px] left-[51px]"
                        alt="Vector"
                        src="/vector-34.svg"
                      />

                      <img
                        className="absolute w-[26px] h-9 top-[11px] left-[42px]"
                        alt="Vector"
                        src="/vector-36.svg"
                      />

                      <img
                        className="absolute w-1 h-2.5 top-6 left-[60px]"
                        alt="Vector"
                        src="/vector-35.svg"
                      />

                      <img
                        className="absolute w-1.5 h-[3px] top-[26px] left-[50px]"
                        alt="Vector"
                        src="/vector-45.svg"
                      />

                      <img
                        className="absolute w-0.5 h-[3px] top-[30px] left-[54px]"
                        alt="Vector"
                        src="/vector-37.svg"
                      />

                      <img
                        className="absolute w-0.5 h-[3px] top-[27px] left-[62px]"
                        alt="Vector"
                        src="/vector-37.svg"
                      />

                      <img
                        className="absolute w-[25px] h-[27px] top-[7px] left-[41px]"
                        alt="Vector"
                        src="/vector-31.svg"
                      />

                      <img
                        className="absolute w-1.5 h-0.5 top-[37px] left-14"
                        alt="Vector"
                        src="/vector-48.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex items-center justify-center gap-16 px-[150px] py-8 w-full">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 py-4">
          <div className="w-[64px] h-[64px] bg-[url(/g16-1.png)] bg-[100%_100%]" />
          <div className="text-black text-4xl font-['Montserrat',Helvetica] font-extrabold text-center">
            INOVEX
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex items-start gap-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5"
            >
              {item.icon}
              <div className="font-['Montserrat',Helvetica] font-medium text-black text-xl whitespace-nowrap">
                {item.text}
              </div>
            </div>
          ))}

          {/* Social Media Icons */}
          <div className="flex items-center gap-8">
            {socialMedia.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                <div className="w-[30px] h-[30px] bg-[#9334ea] rounded-[15px] shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};
