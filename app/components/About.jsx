import React from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../img/1.png";
import {
  BsFillGiftFill,
  BsCalendar2Check,
  BsBook,
  BsTelephone,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { PiStudentFill, PiGameController } from "react-icons/pi";
import { FiMail } from "react-icons/fi";

function About() {
  return (
    <section className=" h-[50rem] w-full bg-[#f3f2f2] md:h-[56rem] lg:h-[38rem] ">
      <div className="mx-[2rem] sm:mx-[4rem] md:mx-[5rem] lg:mx-[5rem] xl:mx-[10rem]">
        <h3
          className="pt-2 text-[14px] md:py-10 md:text-[16px] 2xl:py-20 2xl:text-[22px]
         text-center font-bold underline underline-offset-2 text-[#0B5CA9]"
        >
          About Me
        </h3>
        <div
          className="mt-5 flex gap-3  flex-col sm:flex-col md:flex-col lg:flex-row lg:items-center 
         xl:items-center 2xl:items-center  justify-between"
        >
          <div className=" flex justify-center sm:justify-center md:justify-center">
            <Image
              src={img}
              height={300}
              width={320}
              alt="profile"
              className="w-[11rem] sm:w-[14rem] md:w-[17rem] lg:w-[19rem] xl:w-[22rem]"
            />
          </div>
          <div>
            <h1 className="text-[15px] font-semibold sm:text-[15px] md:text-[25px] lg:text-[26px] lg:font-bold 2xl:text-[32px]">
              I'm Shanto Sarkar and{" "}
              <span className="font-extrabold text-[#160B77] text-[17px] md:text-[28px] lg:text-[30px] 2xl:text-[36px]">
                Web Developer
              </span>
            </h1>
            <p
              className="pt-2 text-[7px] text-center sm:text-[10px] md:pt-5 md:text-[15px] lg:text-[12px] lg:text-start xl:text-[15px] 2xl:text-[22px]
             text-gray-600"
            >
              Hi! My name is Shanto Sarkar. I am a Web Developer, and I'm very
              passionate and dedicated
              <br /> to my work. With 20 years experience as a professional Web
              developer, I have
              <br />
              acquired the skills and knowledge necessary to make your project
              <br /> a success.
            </p>
            <div className="mt-5">
              <div className="flex gap-5  flex-col sm:flex-col md:flex-row md:justify-center md:gap-8 lg:flex-row  lg:gap-3 lg:justify-between ">
                <ul className="flex flex-col gap-1 md:gap-2">
                  <li className="flex gap-2 items-center">
                    <div>
                      <BsFillGiftFill className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Birthday:{" "}
                        <span className=" font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px]">
                          {" "}
                          13/12/2004
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div>
                      <BsCalendar2Check className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Age:{" "}
                        <span className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px]">
                          {" "}
                          19
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div>
                      <MdLocationOn className="text-[#0B5CA9] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[28px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Location:{" "}
                        <span className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px]">
                          {" "}
                          Rajshahi,Bogura,Dhunat
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div>
                      <PiGameController className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Interestes:{" "}
                        <span className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px]">
                          {" "}
                          Playstation, Reading
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className="flex flex-col gap-1 md:gap-2">
                  <li className="flex gap-2 items-center">
                    <div>
                      <BsBook className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Study:{" "}
                        <span className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px]">
                          {" "}
                          Univercity of Chicago
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div>
                      <PiStudentFill className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Degree:{" "}
                        <span className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px]">
                          {" "}
                          Inermediate
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div>
                      <FiMail className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Mail:
                        <span
                          className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px] cursor-pointer
                        hover:underline hover:underline-offset-2 transition duration-300"
                        >
                          {" "}
                          shanto9070sarkar@gmail.com
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-2 items-center">
                    <div>
                      <BsTelephone className="text-[#0B5CA9] md:text-[20px] lg:text-[22px] xl:text-[25px] 2xl:text-[25px]" />
                    </div>
                    <div className="flex items-center mt-[1px] ">
                      <p className="text-[14px] font-bold md:text-[18px] lg:text-[20px] xl:text-[22px] ">
                        Phone:{" "}
                        <span
                          className="font-light text-[12px] md:text-[15px] lg:text-[16px] xl:text-[17px] cursor-pointer 
                      hover:underline hover:underline-offset-2 transition duration-300"
                        >
                          {" "}
                          +880 1783-805534
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
