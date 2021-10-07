import type { NextPage } from "next";
import taskStyles from "./css.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { BsTrash } from "react-icons/bs";

const TaskList: NextPage = () => {
  const proyecto = {
    proyectName: "Example Project ",
    id: "062a99eb-b9e7-4672-9af2-e0bc8327eacb",
    tareasProyecto: [
      {
        taskName: "tarea 1",
        complete: true,
        id: "b61544e0-6b16-42d6-9687-79680bc0fd95",
      },
      {
        taskName: "tarea 2",
        complete: false,
        id: "c24e0305-2dc0-4dc5-853b-c4b94839006d",
      },
      {
        taskName: "tarea 3",
        complete: false,
        id: "23dce8fd-15e9-4605-9779-22d74f6a93e4",
      },
    ],
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  return (
    <>
      <h2 className="font-raleway text-center my-2 text-xl">
        Clase: {proyecto.proyectName}
      </h2>

      {proyecto.tareasProyecto.length === 0 ? (
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
            proyecto.tareasProyecto,
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
              {proyecto.tareasProyecto.map((task, index) => (
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
