import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton  from "@/app/components/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5 overflow-hidden mt-14" id="contact">
      {/* background grid */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}

      <div className="flex flex-col items-center">
      <h1 className='text-6xl text-gray-400 flex justify-center items-center m-[6%]'>
          Are you up for some more creativity?
        </h1>
        <p className="text-gray-400 text-3xl mt-5 mb-2 text-center">
          Reach out to us
          
        </p>
        <a href="mailto:sayanp650@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center mr-[5%] ml-[5%]">
        <p className="md:text-base text-sm mb-5 md:font-normal font-light">
          Copyright ©2015 - 2024 Strokes. All Rights Reserved 
        </p>
        
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            // eslint-disable-next-line react/jsx-key
            <a href={info.href}>
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 sm:mt-3"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

export const socialMedia = [
    {
      id: 1,
      img: "/insta.svg",
      href: "https://www.instagram.com/wearestrokes?igsh=M3YxMXI1MWR5MGIz"
    },
    {
      id: 2,
      img: "/link.svg",
      href: "https://www.linkedin.com/company/strokesnitd/",
    },
  ];