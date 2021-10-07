import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import HomeProjects from "../components/HomeProjects";
import { rutes } from "../helpers/rutes";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "../actions/authActions";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  const user: object = useSelector((state) => state.auth.getUserCredentials);
  const dispatch = useDispatch();
  const handlerLogOut = () => dispatch(logOutAction());

  useEffect(() => {
    if (!user) {
      Router.push(rutes.login);
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="min-h-screen w-full flex flex-col">
        <div className="bg-gray-800 py-2 px-4 flex ">
          <Logo />

          <NavBar
            links={[
              { route: "/home", text: "inicio" },
              { route: "/messages", text: "mensajes" },
            ]}
          />
          <button className="text-white" type="button" onClick={handlerLogOut}>
            Cerrar sesión
          </button>
        </div>
        <HomeProjects />
      </div>
    </>
  );
};
export default Home;
