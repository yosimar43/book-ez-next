import type { NextPage } from "next";
import Image from "next/image";

interface ComponentProperties {
  text: string;
  icon?: any;
}

const JumpText: NextPage<ComponentProperties> = ({ text, icon }) => {
  return (
    <div className="w-full h-max px-2- py-4 my-8  flex flex-col justify-center items-center caja animate-bounce">
      <p className="text-4xl text-red-400">{text}</p>
      <div className="text-3xl text-red-400">{icon}</div>
    </div>
  );
};

export default JumpText;
