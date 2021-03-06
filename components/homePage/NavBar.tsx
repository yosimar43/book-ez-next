import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import feather from "../../public/feather.svg";
import gsap from "gsap";

export const NavBar: NextPage = () => {
  const el = useRef(null);
  const linkDiv = useRef(null);
  const featherRef = useRef(null);

  const [activeLink, SetActiveLink] = useState({
    width: 0,
    Height: 0,
    link: 0,
  });

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

  useEffect(() => {
    const animationFeather = () => {
      console.log(linkDiv.current.clientWidth + featherRef.current.clientWidth);
      if (activeLink.link === 1) {
        gsap.to(".pluma", {
          x:
            activeLink.width +
            linkDiv.current.clientWidth / 2 -
            activeLink.width,
          y: -activeLink.Height,
          opacity: 1,
          duration: 1,
        });
      }

      if (activeLink.link === 2) {
        let xl: number =
          linkDiv.current.clientWidth +
          featherRef.current.clientWidth / 2 -
          featherRef.current.clientWidth / 4;
        gsap.to(".pluma", {
          x: xl,
          y: -activeLink.Height,
          opacity: 1,
          duration: 1,
        });
      }
    };

    const featherReset = () => {
      gsap.to(".pluma", {
        x: 0,
        opacity: 0,
      });
    };
    if (activeLink.link === 0) {
      featherReset();
      return;
    }
    if (activeLink.link === 1 || activeLink.link === 2) {
      animationFeather();
      return;
    }
  }, [activeLink]);

  let linkHoverTransition =
    "before:block before:bg-blue-500 before:content-[''] before:absolute before:w-full before:h-px before:bottom-0 overflow-hidden before:translate-x-full hover:before:translate-x-0 ";

  return (
    <nav className="flex justify-evenly pt-3 px-4 sticky top-0 shadow-md bg-white flex-wrap z-50">
      <div className="flex justify-center items-center p-4 w-1/2 ">
        <p
          className="w-full h-full mb-2 text-blue-400 text-2xl font-logo -rotate-3 text-left sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl"
          ref={el}
        ></p>
      </div>
      <div
        className="flex justify-evenly py-2 items-center font-quickSand"
        ref={linkDiv}
      >
        <div className="pluma" ref={featherRef}>
          <Image src={feather} />
        </div>
        <Link href="/login">
          <a
            onMouseEnter={({ currentTarget }) =>
              SetActiveLink({
                width: currentTarget.clientWidth,
                Height: currentTarget.clientHeight,
                link: 1,
              })
            }
            onMouseOut={() => SetActiveLink({ Height: 1, width: 1, link: 0 })}
            className={` text-red-400 mx-4 relative transition-all duration-700 ease-out over:-translate-y-2 hover:scale-125  hover:text-red-600 ${linkHoverTransition}`}
          >
            Ingresar
          </a>
        </Link>
        <Link href="/register">
          <a
            onMouseEnter={({ currentTarget }) =>
              SetActiveLink({
                width: currentTarget.clientWidth,
                Height: currentTarget.clientHeight,
                link: 2,
              })
            }
            onMouseOut={() => SetActiveLink({ Height: 1, width: 1, link: 0 })}
            className={`text-red-400 mx-4 relative transition-all duration-700 hover:-translate-y-2 hover:scale-125 hover:text-red-600 ${linkHoverTransition}`}
          >
            Nueva cuenta
          </a>
        </Link>
      </div>
    </nav>
  );
};
