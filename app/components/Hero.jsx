import React from "react";
import Link from "next/link";
import Image from "next/image";
import img2 from "../img/avatar.png";

function Hero() {
  return (
    <section className="pt-[2rem] w-full bg-[#fafafa]">
      <div className="mx-[2rem] sm:mx-[4rem] md:mx-[5rem] lg:mx-[5rem] xl:mx-[10rem]">
        <div className="pt-[2rem] sm:pt-[3rem] md:pt-[5rem] lg:pt-[8rem] xl:pt-[10rem] ">
          <div className="flex gap-5  flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between ">
            <div className=" mt-2 sm:mt-10">
              <h3 className="text-[10px] font-bold text-center sm:text-[22px] sm:gap-5  md:text-[25px] md:gap-10 lg:text-[30px] lg:gap-14 lg:text-start xl:text-[32px] text-[#0B5CA9] ">
                Hi i'm Shanto{" "}
              </h3>
              <h1 className="text-[20px] text-center sm:text-[39px] md:text-[40] lg:text-[50px] lg:text-start xl:text-[55px] font-bold  ">
                Web{" "}
                <span className="text-[#160B77] uppercase text-[25px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[75px]">
                  designer <span className=" text-[#0B5CA9] ">&</span> developer
                </span>
              </h1>
              <p className="pt-2  text-[6px] text-center sm:text-[10px] md:pt-5 md:text-[12.5px] lg:text-[12px] lg:text-start xl:text-[13px] 2xl:text-[19px] text-gray-600">
                A programmer is a creative problem solver who uses programming
                languages to instruct computers
                <br/> and develop software applications. They analyze user
                needs, design solutions, write code,
                <br/> and debug programs to ensure functionality. Programmers
                play a pivotal role in shaping
                <br/> the digital world, enabling innovation and technological
                advancement.
              </p>
              <div className="py-8 lg:py-10 2xl:py-16 text-center lg:text-start">
                <Link
                  href={"#"}
                  className="text-[10px] font-bold py-2 px-5 rounded-[8px] md:text-[20px] xl:text-[22px] md:py-2 md:px-10 lg:py-4 lg:px-12 xl:py-4 xl:px-12
                text-white  bg-[#0B5CA9] hover:bg-white hover:text-[#0B5CA9]
                 border-[3px] border-[#0B5CA9] transition duration-300"
                >
                  Get Connect
                </Link>
              </div>
            </div>
            <div className=" lg:-mt-[10rem] xl:-mt-[10rem]  2xl:-mt-20">
              <Image
                src={img2}
                height={500}
                width={520}
                alt="profile"
                className=" w-[12rem] sm:w-[16rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem] 2xl:w-[35rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
