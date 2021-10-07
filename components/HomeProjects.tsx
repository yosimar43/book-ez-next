import type { NextPage } from "next";
import { rutes } from "../helpers/rutes";
import NewTask from "./home/NewTask";
import SideNavbar from "./home/SideNavbar";
import TaskList from "./home/TaskList";
import NavBar from "./NavBar";
import { FaTasks } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

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

        <NewTask />

        <TaskList />
      </div>
    </div>
  );
};

export default HomeProjects;
