import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Typed from "typed.js";

export const NavBar: NextPage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hola", "¿Eres nuevo?", "Bienvenido", "Book-ez.com", "Book-ez"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 600,
      typeSpeed: 120,
      backSpeed: 80,
      backDelay: 80,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <nav className="flex justify-between pt-3 px-4 sticky top-0 shadow-md bg-white">
      <div className="flex justify-center items-center p-4">
        <p className="text-blue-400 text-4xl font-logo -rotate-3" ref={el}></p>
      </div>
      <div className="flex justify-evenly py-2 items-center font-quickSand">
        <Link href="/login">
          <a className=" text-red-400 mx-4 transition-transform duration-700 hover:-translate-y-2 hover:scale-125  hover:text-red-600 ">
            Ingresar
          </a>
        </Link>
        <Link href="/register">
          <a className="text-red-400 mx-4 transition-transform duration-700 hover:-translate-y-2 hover:scale-125  hover:text-red-600">
            Nueva cuenta
          </a>
        </Link>
      </div>
    </nav>
  );
};
