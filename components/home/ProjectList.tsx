import React from "react";
import { useEffect } from "react";
import Proyecto from "./Project";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProyectsLists = () => {
  // useEffect(() => {
  //   getProjects();
  // }, []);

  let proyectos: {}[] = [
    {
      proyectName: "Example Project ",
      id: "062a99eb-b9e7-4672-9af2-e0bc8327eacb",
      apuntes: [
        {
          titulo: "Nota de prueba.",
          nota: "Hola soy un apunte de prueba en el entorno de desarrollo.\nv- alpha 1.3.3\n",
          id: "aea47634-bdad-4525-acb4-6f01e76cbe88",
          fecha: "30/8/2021-13:37",
        },
        {
          titulo: "Licencia-MIT",
          nota: "Esta aplicación es de código abierto si deseas realizar una modificación o hacer un reporte lo puedes hacerlo mediante el repositorio De Git hub.\nhttps://github.com/yosimar43/Book-ez  ",
          id: "37b11f77-30ef-466e-a38e-4d603caf7720",
          fecha: "1/9/2021-10:46",
        },
      ],
      tareasProyecto: [
        {
          taskName: "task 1",
          complete: false,
          id: "b61544e0-6b16-42d6-9687-79680bc0fd95",
        },
        {
          taskName: "Task 2",
          complete: false,
          id: "c24e0305-2dc0-4dc5-853b-c4b94839006d",
        },
        {
          taskName: "Task 3",
          complete: false,
          id: "23dce8fd-15e9-4605-9779-22d74f6a93e4",
        },
      ],
    },
  ];

  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno </p>;

  return (
    <ul className="listado-proyectos justify-self-center">
      <TransitionGroup>
        {proyectos.map((project) => (
          <CSSTransition timeout={400} classNames="proyecto" key={project.id}>
            <Proyecto proyecto={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProyectsLists;
