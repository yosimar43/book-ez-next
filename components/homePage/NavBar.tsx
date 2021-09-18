import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";
import type { NextPage } from "next";

export const NavBar: NextPage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hola", "¿Eres nuevo?", "Bienvenido a", "Book-ez"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 600,
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <nav className="flex  justify-between pt-3 px-4 shadow-md">
      <div className="flex justify-center items-center p-4">
        <p className="text-blue-400 text-4xl font-logo -rotate-3" ref={el}>
          hola
        </p>
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
