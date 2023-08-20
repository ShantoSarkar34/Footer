import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerimg from "../img/footer-logo.png";
import { BsHeadphones } from "react-icons/bs";
import { LuMailOpen } from "react-icons/lu";

function Footer() {
  return (
    <section className=" min-w-full bg-[#E7E8ED]">
      <div className=" px-5 pt-10 md:px-10 xl:px-[5rem]">
        <div className="grid justify-between grid-col-1 gap-10  md:grid-cols-2  xl:grid-cols-4">
          {/* grid 1 start */}
          <div>
        
            {/* footer logo image start */}
            <div className="xl:mt-6">
              <Image
                src={footerimg}
                alt="logo"
                height={300}
                width={250}
                className="w-40 md:w-56 xl:w-44 "
              />
            </div>
            {/* footer logo image end */}


            {/* grid 1 content */}

            <p className="py-5 xl:py-10 text-sm text-[#6f7495] tracking-[1px] ">
              Pellentesque facilisis the ullamcorp keer sapien interdum is the
              magna pellentesque kequis hasellus keur condimentum eleifend.
            </p>
            <ul>
              <li className="flex gap-5 items-center">
                <BsHeadphones className="text-[19px] text-[#6f7495]" />
                <p className="text-[#6f7495] text-[14px]">
                  {" "}
                  Call Us:
                  <span>
                    <Link
                      href={"tel:344-755-111"}
                      className="text-[#6E4FF6] hover:text-[#64AD9F] transition duration-200"
                    >
                      {" "}
                      344-755-111
                    </Link>
                  </span>
                </p>
              </li>
              <li className="flex gap-5 items-center mt-3">
                <LuMailOpen className="text-[19px] text-[#6f7495]" />
                <Link
                  href={"support@aazztech.com"}
                  className="text-[#6E4FF6] text-[14px] hover:text-[#64AD9F] transition duration-200"
                >
                  support@aazztech.com
                </Link>
              </li>
            </ul>
          </div>
          {/* grid 1 end  */}

          {/* grid 2 start  */}
          <div className=" xl:mt-10">
            <h2 className="text-[1.2rem] font-semibold text-[#313342] tracking-[1px]">
              Popular Category
            </h2>
            <ul className=" flex-col space-y-2 sm:mt-8">
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Wordpress
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Plugins
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Joomla Template
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Admin Template
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  HTML Template
                </Link>
              </li>
            </ul>
          </div>
          {/* gird 2 end  */}

          {/* grid 3 start */}
          <div className="xl:mt-10 ">
            <h2 className="text-[1.2rem] font-semibold text-[#313342] tracking-[1px]">
              Our Company
            </h2>
            <ul className=" flex-col space-y-2 sm:mt-8">
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Abour Us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Affiliates
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Plan & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* grid 3 end */}

          {/* grid 4 start */}
          <div className=" pb-10  xl:pb-[7rem] xl:mt-10">
            <h2 className="text-[1.2rem] font-semibold text-[#313342] tracking-[1px]">
              Help Support
            </h2>
            <ul className=" flex-col space-y-2 sm:mt-8">
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Support Forum
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Support Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Buyers Faq
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className="text-[15px] text-[#6f7495] hover:text-[#6E4FF6] trasnition duration-200"
                >
                  Sellers Faq
                </Link>
              </li>
            </ul>
          </div>
          {/* grid 4 end */}
        </div>
      </div>

 {/* ================================ */}

      {/* footer end section  */}
      <div className="h-[5rem] md:h-[6rem] w-full bg-[#192027] flex items-center justify-center">
        <h1 className="text-[13px] md:text-[15px] text-center  text-[#999795] ">
          © 2018
          <span>
            <Link
              href={"#"}
              className="text-[#6E4FF6] hover:text-[#64AD9F] transition duration-300"
            >
              {" "}
              DigiPro
            </Link>
          </span>
          . All rights reserved. Created by
          <span>
            <Link
              href={"#"}
              className="text-[#6E4FF6] hover:text-[#64AD9F] transition duration-300"
            >
              {" "}
              AazzTech
            </Link>
          </span>{" "}
        </h1>
      </div>
 {/* =============================== */}

    </section>
  );
}

export default Footer;
