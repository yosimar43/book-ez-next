import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { searchNotesAction } from "../../actions/projectsActions";

const SearhNote: NextPage = () => {
  const [note, setNote] = useState({
    busqueda: "",
  });
  const dispatch = useDispatch();

  const searchNote = (text: string) => dispatch(searchNotesAction(text));

  useEffect(() => {
    if (note.busqueda.trim() === "") {
      searchNote("");
    }

    searchNote(note.busqueda);
  }, [note.busqueda]);

  const handlerChange = (event) =>
    setNote({ [event.target.name]: event.target.value });

  const handlerBlur = () => {
    if (note.busqueda.length === 0) searchNote("");
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (note.busqueda === "") return;

    searchNote(note.busqueda.trim());
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
