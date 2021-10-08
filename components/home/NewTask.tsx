import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addNewTaskAction,
  updateTaskAction,
} from "../../actions/projectsActions";

const NewTask: NextPage = () => {
  const [tarea, setTarea] = useState({
    taskName: "",
    complete: false,
  });
  const dispatch = useDispatch();

  const tareaActual = useSelector((state) => state.projects.tarea);
  const proyecto = useSelector((state) => state.projects.proyecto);
  const updateTask = () => dispatch(updateTaskAction(tarea));
  const addNewTask = () => dispatch(addNewTaskAction(tarea));

  useEffect(() => {
    tareaActual === null
      ? setTarea({
        taskName: "",
        complete: false,
      })
      : setTarea(tareaActual);
  }, [tareaActual]);

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
    // addNewTask();
    // setTarea({
    //   taskName: "",
    //   complete: false,
    // });
    if (tareaActual === null) {
      addNewTask();
      setTarea({
        taskName: "",
        complete: false,
      });
    } else {
      updateTask();
      setTarea({
        taskName: "",
        complete: false,
      });
    }
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
          value={tareaActual ? "Editar tarea" : "agregar tarea"}
        />
      </form>
    </div>
  );
};

export default NewTask;
