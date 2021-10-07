import type { NextPage } from "next";
import { useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note";

import { useEffect } from "react";

const Notes: NextPage = () => {
  const [notes, setNotes] = useState([
    {
      titulo: "Licencia-MIT",
      nota: "Esta aplicación es de código abierto si deseas realizar una modificación o hacer un reporte lo puedes hacerlo mediante el repositorio De Git hub.\nhttps://github.com/yosimar43/Book-ez  ",
      id: "37b11f77-30ef-466e-a38e-4d603caf7720",
      fecha: "1/9/2021-10:46",
    },
    {
      titulo: "Nota de prueba.",
      nota: "Hola soy un apunte de prueba en el entorno de desarrollo.\nv- alpha 1.3.3\n",
      id: "aea47634-bdad-4525-acb4-6f01e76cbe88",
      fecha: "30/8/2021-13:37",
    },
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
  ]);

  //   useEffect(() => {
  //
  //     if (searchNotes.length === 0) {
  //       setNotes(proyecto.apuntes)
  //     } else {
  //       setNotes(searchNotes)
  //     }
  //
  //
  //   }, [searchNotes, proyecto.apuntes])
  //

  return (
    <div className="w-full  px-4 grid grid-cols-1  md:grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 auto-rows-400 gap-4">
      <NewNote />
      {notes.reverse().map((apunte) => (
        <Note key={apunte.id} apunte={apunte} />
      ))}
    </div>
  );
};

export default Notes;
