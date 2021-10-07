import type { NextPage } from "next";
import { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";

const SearhNote: NextPage = () => {
  const [note, setNote] = useState({
    busqueda: "",
  });

  //   useEffect(() => {
  //
  //     if (note.busqueda.trim() === "") {
  //       buscarNotas("")
  //     }
  //
  //     buscarNotas(note.busqueda)
  //
  //   }, [note.busqueda])
  //

  const handlerChange = (event) =>
    setNote({ [event.target.name]: event.target.value });

  const handlerBlur = () => {
    // if (note.busqueda.length === 0)
    // buscarNotas("")
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (note.busqueda === "") return;

    // buscarNotas(note.busqueda.trim())
  };

  return (
    <div className="flex justify-center p-12">
      <div className="flex-initial h-12 w-auto">
        <AiOutlineFileSearch size="3rem" />
      </div>
      <form className="h-10 w-10/12" onSubmit={handlerSubmit}>
        <input
          type="text"
          className="block  w-full h-full rounded-lg bg-gray-200 p-4"
          placeholder="Buscar..."
          autoComplete="off"
          name="busqueda"
          value={note.busqueda}
          onChange={handlerChange}
          onBlur={handlerBlur}
        />
      </form>
    </div>
  );
};

export default SearhNote;
