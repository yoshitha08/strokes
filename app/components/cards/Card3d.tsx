"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { secondYear, fourthYear, thirdYear } from "@/data";

type YearData = { id: number; name: string; img: string; post: string; social: string }[];

export function ThreeDCardDemo() {
  const [year, setYear] = useState<YearData>(fourthYear);

  const handleTabClick = (tabName: YearData) => {
    setYear(tabName);
  };

  return (
    <>
    <div className="flex items-center justify-center mt-10">
        <button
          className={`py-2 px-4 transition-colors duration-300 ${
            year === secondYear
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick(secondYear)}
        >
          Second Year
        </button>
        <button
          className={`py-2 px-4 transition-colors duration-300 ${
            year === thirdYear
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick(thirdYear)}
        >
          Third Year
        </button>
        <button
          className={`py-2 px-4 transition-colors duration-300 ${
            year === fourthYear
              ? "text-red-500 border-b-2 border-red-500"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick(fourthYear)}
        >
          Fourth Year
        </button>
      </div>
    <div id="members" className="grid grid-cols-3 overflow-hidden m-10 gap-3">
      {year === secondYear
        ? secondYear.map((item) => (
            <CardContainer className="inter-var" key={item.id}>
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.post}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.social}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Socials
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        : year === thirdYear
        ? thirdYear.map((item) => (
            <CardContainer className="inter-var" key={item.id}>
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.post}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.social}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Socials
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        : fourthYear.map((item) => (
            <CardContainer className="inter-var" key={item.id}>
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-black dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {item.post}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={item.social}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Socials
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
    </div>
    </>
  );
}
