import type { NextPage } from "next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const NewTask: NextPage = () => {
  //   useEffect(() => {
  //     tareaActual === null
  //       ? setTarea({
  //         taskName: "",
  //         complete: false,
  //       })
  //       : setTarea(tareaActual);
  //   }, [tareaActual]);
  //
  const proyecto = useSelector((state) => state.projects.proyecto);

  const [tarea, setTarea] = useState({
    taskName: "",
    complete: false,
  });

  const notifyErrorName = () => {
    toast.dismiss();
    toast.error("Deberias poner un texto mas descriptivo :)", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      pauseOnFocusLoss: true,
    });
  };

  const handlerChange = (event) =>
    setTarea({
      ...tarea,
      [event.target.name]: event.target.value,
    });

  const handlerSubmit = (event) => {
    event.preventDefault();
    toast.dismiss();
    if (tarea.taskName.trim() === "") return notifyErrorName();
  };

  if (!proyecto) return null;
  return (
    <div className="bg-gray-600 px-8 flex justify-center">
      <form
        className="w-11/12 flex flex-col m-2 items-center justify-center px-4 "
        onSubmit={handlerSubmit}
      >
        <input
          type="text"
          autoComplete="off"
          className=" px-5 py-2 outline-none bg-white text-black text-lg rounded-lg my-2 w-2/5"
          placeholder="Nombre de tarea..."
          name="taskName"
          value={tarea.taskName}
          onChange={handlerChange}
        />
        <input
          type="submit"
          className="p-2 px-5 outline-none bg-white text-black text-lg rounded-lg my-4 w-2/5"
          // value={tareaActual ? "Editar tarea" : "agregar tarea"}
          value="Agregar tarea"
        />
      </form>
    </div>
  );
};

export default NewTask;
