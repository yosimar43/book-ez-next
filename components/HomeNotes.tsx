import type { NextPage } from "next";
import { rutes } from "../helpers/rutes";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import SideNavbar from "./home/SideNavbar";
import NavBar from "./NavBar";
import SearhNote from "./home/SearhNote";
import NotesList from "./home/NotesList";

const HomeProjects: NextPage = () => {
  return (
    <div className="  flex-grow flex">
      <SideNavbar />

      <div className="flex-grow  ">
        <div className="bg-gray-700">
          <NavBar
            links={[
              {
                route: rutes.principalPage,
                text: "tareas",
                icon: <FaTasks size="1.5rem" />,
              },
              {
                route: rutes.notePage,
                text: "Apuntes",
                icon: <BiTask size="1.5rem" />,
              },
            ]}
          />
        </div>

        <SearhNote />

        <NotesList />
      </div>
    </div>
  );
};

export default HomeProjects;
