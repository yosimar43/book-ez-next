import { useDispatch, useSelector } from "react-redux";
import { setActualProjectAction } from "../../actions/projectsActions";

const Proyecto = ({ proyecto }: { proyecto: any }) => {
  const { proyectName } = proyecto;

  const dispatch = useDispatch();
  const proyectoActual = useSelector((state) => state.projects.proyecto);
  const setActualProject = (project: object) =>
    dispatch(setActualProjectAction(project));

  let isActive =
    proyectoActual?.proyectName === proyectName
      ? "bg-blue-200 p-4 rounded-3xl"
      : "";

  return (
    <li className={`p-4 rounded-3xl ${isActive}`}>
      <button
        type="button"
        className="btn btn-blank  "
        onClick={() => {
          setActualProject(proyecto);
        }}
      >
        {proyectName}
      </button>
    </li>
  );
};

export default Proyecto;
