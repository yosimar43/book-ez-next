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
