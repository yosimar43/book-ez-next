import type { NextPage } from "next";
import { BsArrowsExpand } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  deleteTaskAction,
  editTaskAction,
  EditTaskStateAction,
} from "../../actions/projectsActions";
import taskStyles from "./css.module.css";

const Task: NextPage = ({ tarea }: any) => {
  const { taskName, complete, id } = tarea;

  const dispatch = useDispatch();
  const changeTasksState = () => dispatch(EditTaskStateAction(tarea));
  const editTask = () => dispatch(editTaskAction(tarea));
  const deleteTask = () => dispatch(deleteTaskAction(id));
  return (
    <li className={taskStyles.tarea}>
      <p>
        <BsArrowsExpand className="inline" />
        {taskName}
      </p>
      <div className="flex">
        <div className="mr-4 ">
          {complete ? (
            <button
              type="button"
              className="px-4 py-2 bg-green-100 text-gray-800 text-sm rounded-lg cursor-pointer"
              onClick={changeTasksState}
            >
              Completo
            </button>
          ) : (
            <button
              onClick={changeTasksState}
              type="button"
              className=" px-4 py-2 bg-red-100 text-gray-800 text-sm rounded-lg cursor-pointer"
            >
              Incompleto
            </button>
          )}
        </div>
        <div className="acciones">
          <button
            onClick={editTask}
            type="button"
            className="p-2  bg-gray-500 text-gray-100 text-sm rounded-lg hover:bg-gray-600"
          >
            Editar
          </button>
          {complete ? (
            <button
              onClick={deleteTask}
              type="button"
              className="text-red-400 mx-4"
            >
              Eliminar
            </button>
          ) : null}
        </div>
      </div>
    </li>
  );
};

export default Task;
