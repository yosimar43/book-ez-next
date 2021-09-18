import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import favicon from "/public/educationtraining.png";

export const NavBar: NextPage = () => {
  return (
    <nav className="flex  justify-between pt-3 px-4 shadow-md">
      <div className="flex justify-center items-center p-4">
        <p className="text-blue-400 text-4xl font-logo -rotate-3">book-ez</p>
      </div>
      <div className="flex justify-evenly py-2 items-center font-quickSand">
        <Link href="/login">
          <a className="text-red-400 mx-4">Ingresar</a>
        </Link>
        <Link href="/register">
          <a className="text-red-400 mx-4">Nueva cuenta</a>
        </Link>
      </div>
    </nav>
  );
};
