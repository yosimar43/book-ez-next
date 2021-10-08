import type { NextPage } from "next";
import { useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note";

import { useEffect } from "react";
import { useSelector } from "react-redux";

const Notes: NextPage = () => {
  const notas = useSelector((state) => state.projects.proyecto.notes);
  const searchNotes = useSelector((state) => state.projects.searchNotes);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (searchNotes.length === 0) {
      setNotes(notas);
    } else {
      setNotes(searchNotes);
    }
  }, [searchNotes, notas]);

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
