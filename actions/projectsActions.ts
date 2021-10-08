import { v4 as uuidv4 } from "uuid";
import {
  ACTUALIZAR_TAREA,
  AGREGAR_PROYECTO,
  AGREGAR_TAREA,
  EDITAR_TAREA,
  ELIMINAR_PROYECTO,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  FORMULARIO_PROYECTO,
  NOSHOWFORM_NEWPROYECT,
  OBTENER_PROYECTOS,
  PROYECTO_ACTUAL,
  AGREGAR_NOTA,
  ELIMINAR_NOTA,
  BUSQUEDA,
} from "../types/projectsTypes";

export const showFormNewProyectAction = () => {
  return (dispatch: any) => {
    dispatch(showFormNewProyect());
  };
};

const showFormNewProyect = () => ({ type: FORMULARIO_PROYECTO });

export const noShowFormAction = () => {
  return (dispatch: any) => {
    dispatch(noShowForm());
  };
};

const noShowForm = () => ({ type: NOSHOWFORM_NEWPROYECT });

export const addNewProjectAction = (project: object) => {
  return (dispatch: any) => {
    dispatch(agregarProjecto(project));
  };
};

const agregarProjecto = (project: object) => {
  project.id = `${uuidv4()}`;
  project.tasks = [];
  project.notes = [];
  return { type: AGREGAR_PROYECTO, payload: project };
};

export const setActualProjectAction = (project: object) => {
  return (dipatch: any) => dipatch(setActualProject(project));
};

const setActualProject = (project: object) => ({
  type: PROYECTO_ACTUAL,
  payload: project,
});

export const deleteProjectByIdAction = (projectId: string) => {
  return (dispatch: any) => dispatch(eliminarProyecto(projectId));
};

const eliminarProyecto = (proyectId: string) => ({
  type: ELIMINAR_PROYECTO,
  payload: proyectId,
});

export const addNewNoteAction = (note: object) => {
  return (dispatch: any) => dispatch(agregarNota(note));
};

const agregarNota = (nota: object) => {
  const id = String(uuidv4());
  let f = new Date();
  const date =
    f.getDate() +
    "/" +
    (f.getMonth() + 1) +
    "/" +
    f.getFullYear() +
    "-" +
    f.getHours() +
    ":" +
    f.getMinutes();
  return {
    type: AGREGAR_NOTA,
    payload: {
      ...nota,
      id,
      date,
    },
  };
};

export const deleteNoteAction = (noteID: string) => {
  return (dispatch: any) => dispatch(eliminarNota(noteID))


}

const eliminarNota = (notaID: string) =>
({
  type: ELIMINAR_NOTA,
  payload: notaID
})

export const searchNotesAction = (textToSearch: string) => {
  return (dispatch: any) => dispatch(buscarNotas(textToSearch))

}

const buscarNotas = (texto: string) =>
  ({ type: BUSQUEDA, payload: texto })

