import React from "react"

const Proyecto = ({ proyecto }) => {

  const { proyectName } = proyecto;

  let isActive = "bg-blue-200 p-4 rounded-3xl"



  return (
    <li className="p-4 rounded-3xl">
      <button
        type="button"
        className="btn btn-blank  "
      // onClick={() => {
      //   editarTarea(null);
      //   proyectoActual(proyecto);
      // }}
      >
        {proyectName}
      </button>
    </li>
  );
};

export default Proyecto;
