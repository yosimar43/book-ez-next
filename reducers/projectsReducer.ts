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

type DefaultProjectsState = {
  showFormNewProject: boolean;
  proyectos: {
    id: string;
    proyectName: string;
    notes: { title: string; id: string; note: string; date: string }[] | [];
    tasks: { complete: boolean; id: string; tasksName: string }[];
  }[];
  searchNotes: { title: string; id: string; note: string; date: string }[];
  proyecto: null | {
    id: string;
    proyectName: string;
    notes: { title: string; id: string; note: string; date: string }[] | [];
    tasks: { complete: boolean; id: string; tasksName: string }[];
  };
  tarea: null | { complete: boolean; id: string; tasksName: string };
};

const defaultState: DefaultProjectsState = {
  showFormNewProject: false,
  proyectos: [
    {
      proyectName: "Example Project ",
      id: "062a99eb-b9e7-4672-9af2-e0bc8327eacb",
      notes: [],
      tasks: [],
    },
  ],
  searchNotes: [],
  proyecto: null,
  tarea: null,
};

const projectsReducer = (
  state = defaultState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case OBTENER_PROYECTOS:
      return { ...state, proyectos: action.payload };

    case FORMULARIO_PROYECTO:
      return { ...state, showFormNewProject: true };

    case NOSHOWFORM_NEWPROYECT:
      return { ...state, showFormNewProject: false };

    case PROYECTO_ACTUAL:
      return { ...state, proyecto: action.payload };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        showFormNewProject: false,
      };

    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
        proyecto: null,
      };

    case AGREGAR_TAREA: {
      let proyectoNewTask = [...state.proyecto.tasks, action.payload];
      let projectupdate = { ...state.proyecto, tasks: proyectoNewTask };

      return {
        ...state,
        proyectos: state.proyectos.map((projecto) =>
          projecto.id === projectupdate.id ? projectupdate : projecto
        ),
        proyecto: projectupdate,
      };
    }
    case ELIMINAR_TAREA: {
      let projectupdate = {
        ...state.proyecto,
        tasks: state.proyecto?.tasks.filter(
          (tarea) => tarea.id !== action.payload
        ),
      };

      return {
        ...state,
        proyectos: state.proyectos.map((projecto) =>
          projecto.id === projectupdate.id ? projectupdate : projecto
        ),
        proyecto: projectupdate,
      };
    }
    case ESTADO_TAREA: {
      let proyectoActual = {
        ...state.proyecto,
        tareasProyecto: state.proyecto?.tasks.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };

      let prueba = state.proyectos.filter((el) => el.id !== proyectoActual.id);

      prueba = [...prueba, proyectoActual];
      return {
        ...state,
        proyectos: prueba,
        proyecto: proyectoActual,
      };
    }
    case EDITAR_TAREA:
      return { ...state, tarea: action.payload };

    case ACTUALIZAR_TAREA: {
      let proyectoNewTask = state.proyecto?.tasks.map((tarea) =>
        tarea.id === action.payload.id ? action.payload : tarea
      );
      let projectupdate = {
        ...state.proyecto,
        tasks: proyectoNewTask,
      };

      return {
        ...state,
        proyectos: state.proyectos.map((projecto) =>
          projecto.id === projectupdate.id ? projectupdate : projecto
        ),
        proyecto: projectupdate,
        tarea: null,
      };
    }

    case AGREGAR_NOTA: {
      let proyectoApuntes = [...state.proyecto?.notes, action.payload];
      let projectupdate = { ...state.proyecto, notes: proyectoApuntes };

      return {
        ...state,
        proyectos: state.proyectos.map((projecto) =>
          projecto.id === projectupdate.id ? projectupdate : projecto
        ),
        proyecto: projectupdate,
      };
    }

    case ELIMINAR_NOTA: {
      let proyectoApuntes = state.proyecto?.notes.filter(
        (apunte) => apunte.id !== action.payload
      );
      let projectupdate = { ...state.proyecto, notes: proyectoApuntes };

      return {
        ...state,
        proyectos: state.proyectos.map((projecto) =>
          projecto.id === projectupdate.id ? projectupdate : projecto
        ),
        proyecto: projectupdate,
      };
    }

    case BUSQUEDA: {
      if (action.payload === "")
        return {
          ...state,
          searchNotes: [],
        };

      const textToSearch = new RegExp(action.payload, "gi");

      const notas = state.proyecto.notes.filter(
        (apunte) =>
          textToSearch.test(apunte.title) || textToSearch.test(apunte.note)
      );

      return {
        ...state,
        searchNotes: notas,
      };
    }

    default:
      return state;
  }
};
export default projectsReducer;
