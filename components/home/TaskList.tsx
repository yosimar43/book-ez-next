import type { NextPage } from "next";
import taskStyles from "./css.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteProjectByIdAction } from "../../actions/projectsActions";

const TaskList: NextPage = () => {
  const proyecto = useSelector((state) => state.projects.proyecto);
  const dispatch = useDispatch();

  const deleteProject = () => dispatch(deleteProjectByIdAction(proyecto.id));

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  if (!proyecto) return null;

  return (
    <>
      <h2 className="font-raleway text-center my-2 text-xl">
        Clase: {proyecto.proyectName}
      </h2>

      {proyecto.tasks.length === 0 ? (
        <h2 className="font-raleway text-center my-2 text-xl">
          Que bien no hay nada pendiente :)
        </h2>
      ) : null}

      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          proyecto.tareasProyecto = reorder(
            proyecto.tasks,
            source.index,
            destination.index
          );
        }}
      >
        <Droppable droppableId="tasksList">
          {(droppableProvided) => (
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className={taskStyles.listado}
            >
              {proyecto.tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Task tarea={task} />
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div>
        <button
          type="button"
          onClick={deleteProject}
          className="p-2 pl-5 pr-5 bg-transparent border-2 duration-500 border-red-300 text-red-500 text-lg rounded-lg hover:bg-red-400 hover:text-gray-100 block m-auto"
        >
          Eliminar clase
          <BsTrash className="inline ml-4" />
        </button>
      </div>
    </>
  );
};

export default TaskList;
