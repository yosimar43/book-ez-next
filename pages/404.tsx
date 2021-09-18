import Link from "next/link";
import type { NextPage } from "next";

const Error404Page: NextPage = () => {
  return (
    <div className="h-screen w-full  relative">
      <div className=" h-full w-full flex flex-col shadow-2xl items-center justify-center text-3xl bg-hero-404 bg-no-repeat bg-right-bottom bg-50% bg-opacity-50">
        <div className="p-8 Error404 text-9xl">404 </div>
        <p className="p-5 ">
          <span className="text-6xl text-indigo-800">oops!!!</span> pagina no
          encotrada
        </p>
        <p className="p-5 ">
          Lo lamentamos pero esta pagina no existe, se ha removido o el nombre
          se a cambiado.
        </p>
        <Link href="/">
          <a className="p-5  text-green-600 backdrop-blur-sm border rounded border-blue-400 ">
            Pagina de inicio
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Error404Page;
