import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import Image from "next/image";

interface CardFeatures {
  cardContent: {
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
  let { image, alt, title, information, link } = cardContent;

  return (
    <div className="w-11/12 p-4 flex justify-evenly rounded-lg items-stretch shadow-md   h-auto  mx-auto mt-8">
      <div className="w-96 h-96 rounded-3xl">
        <Image src={image} alt={alt} layout="responsive" />
      </div>
      <div className="flex flex-col py-8 justify-center">
        <h2 className="font-raleway text-4xl text-blue-600 ">{title}</h2>
        <p className=" font-quickSand">{information}</p>
        {link ? (
          <Link href={link.linkRef}>
            <a>{link.linkText}</a>
          </Link>
        ) : null}
      </div>
    </div>
  );
};
