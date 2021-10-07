import type { NextPage } from "next";
import NuevoProjecto from "./NewProject";
import ProyectsLists from "./ProjectList";

const SideNavbar: NextPage = () => {
  return (
    <aside className="w-min pt-4 px-4 bg-white flex-col flex font-quickSand">
      <NuevoProjecto />
      <h2 className="text-center my-4 ">Tus clases</h2>
      <ProyectsLists />
    </aside>
  );
};

export default SideNavbar;
