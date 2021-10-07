import React from "react";
import Proyecto from "./Project";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";

const ProyectsLists = () => {
  let projects = useSelector((state) => state.projects.proyectos);

  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno </p>;

  return (
    <ul className="listado-proyectos justify-self-center">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition timeout={400} classNames="proyecto" key={project.id}>
            <Proyecto proyecto={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProyectsLists;
