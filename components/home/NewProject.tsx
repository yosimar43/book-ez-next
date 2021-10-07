import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addNewProjectAction,
  noShowFormAction,
  showFormNewProyectAction,
} from "../../actions/projectsActions";

const NuevoProjecto = () => {
  const [proyect, setProyect] = useState({
    proyectName: "",
  });

  const { proyectName } = proyect;

  const dispatch = useDispatch();

  const showFormNewProject = useSelector(
    (state) => state.projects.showFormNewProject
  );

  let projects = useSelector((state) => state.projects.proyectos);

  const showFormNewProjectA = () => dispatch(showFormNewProyectAction());
  const hideShowFormNewProject = () => dispatch(noShowFormAction());
  const addNewProject = (project: object) =>
    dispatch(addNewProjectAction(project));

  const notifyErrorName = () => {
    toast.dismiss();
    toast.error("El nombre no puede estar vacio ", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyIsNotValid = () => {
    toast.dismiss();
    toast.error("Ya tienes un projecto con este nombre", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const isNameValid = (proejctName: string) => {
    let isValid = true;
    projects.forEach((el: object) => {
      if (el.proyectName === proejctName) isValid = false;
    });
    return isValid;
  };

  const handlerChange = (event: any) => {
    setProyect((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handlerSubmit = (event: any) => {
    event.preventDefault();
    if (proyect.proyectName.trim() === "") return notifyErrorName();
    if (!isNameValid(proyect.proyectName)) return notifyIsNotValid();

    addNewProject(proyect);
    setProyect({ proyectName: "" });
  };

  return (
    <>
      <button
        type="button"
        className="p-2 pl-5 pr-5 bg-gray-700 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300  my-4"
        onClick={showFormNewProjectA}
      >
        Nueva clase
      </button>
      {showFormNewProject && (
        <form className="flex flex-col py-4 px-2" onSubmit={handlerSubmit}>
          <input
            type="text"
            autoComplete="off"
            className="outline-none h-10 p-4 placeholder-gray-800 border-gray-600 border-b-2 bg-gray-200"
            autoFocus
            placeholder="Nombre de asignacion"
            name="proyectName"
            onChange={handlerChange}
            value={proyectName}
          />

          <input
            type="submit"
            className="p-2 pl-5 pr-5 bg-gray-700 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300  my-4 cursor-pointer hover:bg-gray-800"
            value="Agregar clase"
          />
          <button
            type="button"
            onClick={hideShowFormNewProject}
            className="p-2 pl-5 pr-5 bg-transparent border-2 duration-500 border-red-300 text-red-500 text-lg rounded-lg hover:bg-red-500 hover:text-gray-100 focus:border-4 focus:border-red-300"
          >
            Cancelar
          </button>
        </form>
      )}
    </>
  );
};

export default NuevoProjecto;
