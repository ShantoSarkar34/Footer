
import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../img/logo.png";

function Header() {
  return (
    <section className="h-[2rem] sm:h-[4rem] md:h-[5rem] lg:h-[5rem] w-full bg-white shadow-lg fixed">
      <div className="mx-[2rem] sm:mx-[4rem] md:mx-[5rem] lg:mx-[5rem] xl:mx-[10rem]">
        <div className="flex items-center justify-between">
          <div className="flex justify-between">
            <div className="mt-1">
              <Image
                src={img1}
                height={200}
                width={220}
                alt="logo"
                className="w-10 sm:w-28 md:w-40 lg:w-44 "
              />
            </div>
          </div>
          <div>
            <ul className="flex gap-1 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-8">
              <li>
                <Link
                  href={"#"}
                  className="text-[5px] sm:text-[10px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold uppercase 
                   text-[#0B5CA9] hover:text-[#160B77] transition duration-300"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[5px] sm:text-[10px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold uppercase
                   text-[#160B77] hover:text-[#0B5CA9] transition duration-300"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[5px] sm:text-[10px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold uppercase
                   text-[#160B77] hover:text-[#0B5CA9] transition duration-300"
                >
                  resume
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[5px] sm:text-[10px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold uppercase
                   text-[#160B77] hover:text-[#0B5CA9] transition duration-300"
                >
                  skills
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[5px] sm:text-[10px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold uppercase
                   text-[#160B77] hover:text-[#0B5CA9] transition duration-300"
                >
                  portfolio
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[5px] sm:text-[10px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-bold uppercase
                   text-[#160B77] hover:text-[#0B5CA9] transition duration-300"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
