import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";

const NewNotes = () => {

  const initialState = {
    titulo: "",
    nota: "",
  };
  const [notaS, setNota] = useState(initialState);

  const { titulo, nota } = notaS;

  const handlerChange = (event) =>
    setNota({ ...notaS, [event.target.name]: event.target.value });

  const handlerReset = () => setNota(initialState);

  const handlerSubmit = (event) => {
    event.preventDefault();
    handlerReset();
  };

  return (
    <div className="w-full h-auto  min-h-80 bg-yellow-300 rounded-3xl p-4  ">
      <form className=" h-full" onSubmit={handlerSubmit}>
        <input
          required
          maxLength={40}
          name="titulo"
          type="text"
          className="border-none bg-transparent w-full block h-auto"
          autoComplete="off"
          placeholder="¿Comenzar una nueva nota?"
          value={titulo}
          onChange={handlerChange}
        />
        <textarea
          name="nota"
          autoComplete="off"
          required
          onDoubleClick={handlerSubmit}
          className="resize-none bg-transparent outline-none h-3/5 w-full block "
          value={nota}
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
