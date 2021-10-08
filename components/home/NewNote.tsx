import { useState } from "react";
import { useDispatch } from "react-redux";
import { GrPowerReset } from "react-icons/gr";
import { addNewNoteAction } from "../../actions/projectsActions";
const initialState = {
  title: "",
  note: "",
};
const NewNotes = () => {
  const dispatch = useDispatch();
  const [notaS, setNota] = useState(initialState);

  const { title, note } = notaS;

  const addNewNote = (note: any) => dispatch(addNewNoteAction(note));

  const handlerChange = (event: any) =>
    setNota({ ...notaS, [event.target.name]: event.target.value });

  const handlerReset = () => setNota(initialState);

  const handlerSubmit = (event: any) => {
    event.preventDefault();
    addNewNote(notaS);
    handlerReset();
  };

  return (
    <div className="w-full h-auto  min-h-80 bg-yellow-300 rounded-3xl p-4  ">
      <form className=" h-full" onSubmit={handlerSubmit}>
        <input
          required
          maxLength={40}
          name="title"
          type="text"
          className="bg-transparent w-full block h-auto outline-none"
          autoComplete="off"
          placeholder="¿Comenzar una nueva nota?"
          value={title}
          onChange={handlerChange}
        />
        <textarea
          name="note"
          autoComplete="off"
          required
          onDoubleClick={handlerSubmit}
          className="resize-none bg-transparent outline-none h-3/5 w-full block "
          value={note}
          onChange={handlerChange}
        />
        <div className="flex justify-end h-auto ">
          <button type="submit" className="mx-4 p-4">
            Guardar
          </button>
          <button type="reset" onClick={handlerReset}>
            <GrPowerReset />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewNotes;
