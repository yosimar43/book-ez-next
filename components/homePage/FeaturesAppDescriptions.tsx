import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

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
  let { reverse, image, alt, title, information, link } = cardContent;

  let isReverse = reverse ? "flex-row-reverse" : "flex-row";

  return (
    <div
      className={`w-11/12 p-4 flex flex-wrap justify-evenly rounded-lg items-stretch shadow-md h-auto mx-auto my-8  ${isReverse}`}
    >
      <div className="w-96 h-96 rounded-3xl overflow-hidden">
        <Image src={image} alt={alt} layout="responsive" />
      </div>
      <div className="flex flex-col py-8 justify-evenly">
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
