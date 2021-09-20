import React, { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";
import gsap from "gsap";
import stackedSteps from "../../public/stacked-steps-haikei.svg";

interface CardFeatures {
  cardContent: {
    reverse: boolean;
    title: string;
    information: string;
    image: any;
    alt: string;
    link?: {
      linkRef: string;
      linkText: string;
    };
  };
}

export const FeaturesAppDescriptions: NextPage<CardFeatures> = ({
  cardContent,
}) => {
  const [isHoverCard, setIsHoverCard] = useState<boolean>(false);

  useEffect(() => {
    const initCardAnimation = () => {
      gsap
        .timeline()
        .to(".svg", {
          x: "100%",
          transitionDuration: 2,
          duration: 2,
        })
        .fromTo("img", { opacity: 0 }, { delay: 1, opacity: 1, duration: 0.5 })
        .fromTo(
          ".text",
          {
            scale: 0,
          },
          { scale: 1, duration: 1 }
        );
    };
    if (isHoverCard) {
      initCardAnimation();
      return;
    } else {
      gsap.to(".svg", {
        transitionTimingFunction: "ease",
        x: 0,
        duration: 1,
      });
    }
  }, [isHoverCard]);

  let { reverse, image, alt, title, information, link } = cardContent;

  let isReverse = reverse ? "flex-row-reverse" : "flex-row";

  return (
    <div
      onMouseEnter={() => setIsHoverCard(true)}
      onMouseLeave={() => setIsHoverCard(false)}
      className={`w-11/12 relative p-4 flex flex-wrap justify-evenly rounded-lg items-stretch shadow-md h-auto mx-auto my-8  ${isReverse} overflow-hidden`}
    >
      <div className="svg w-full h-full z-10 bg-red-50 absolute ">
        <Image
          src={stackedSteps}
          alt="Icono vectorial escaleras"
          layout="responsive"
        />
      </div>

      <div className="w-96 h-96 rounded-3xl overflow-hidden img ">
        <Image src={image} alt={alt} layout="responsive" />
      </div>
      <div className="flex flex-col py-8 justify-evenly text">
        <h2 className="font-raleway text-5xl text-blue-600 py-4 ">{title}</h2>
        <p className=" font-quickSand text-2xl">{information}</p>
        {link ? (
          <Link href={link.linkRef}>
            <a className="max-w-max min-w-min bg-blue-400 rounded-3xl font-quickSand px-2 py-2 transition duration-500 hover:bg-blue-600 hover:text-white">
              {link.linkText}
            </a>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
