import React, { useContext } from "react";
import { MdDeleteSweep, MdDateRange } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteNoteAction } from "../../actions/projectsActions";

const Note = ({ apunte }) => {
  const { title, note, date, id } = apunte;

  const dispatch = useDispatch();

  const deleteNote = () => dispatch(deleteNoteAction(id));

  const getLink = (text) => {
    const isLinkRegExp = new RegExp(
      "(?:(?:https?|ftp|file)://|www.|ftp.)(?:([-A-Z1-9+&@#/%=~_|$?!:,.]*)|[-A-Z0-9+&@#/%=~_|$?!:,.])*(?:([-A-Z0-9+&@#/%=~_|$?!:,.]*)|[A-Z0-9+&@#/%=~_|$])",
      "igm"
    );

    if (!isLinkRegExp.test(text)) return { __html: text };

    const allLinks: string[] = [...new Set(text.match(isLinkRegExp))];

    let newText = text;

    allLinks.forEach(
      (link) =>
      (newText = newText.replaceAll(
        link,
        `<a class="text-blue-700" rel="nofollow noreferrer" href="${link}" target="_blank">${link}</a>`
      ))
    );

    return { __html: newText };
  };

  return (
    <div className="w-full h-auto  min-h-80 bg-blue-300 rounded-3xl p-4  ">
      <div className="flex justify-between h-auto">
        <div className="flex items-center">
          <MdDateRange />
          <p>{date}</p>
        </div>

        <div className="flex items-center">
          <button type="button" onClick={deleteNote}>
            Eliminar
          </button>
          <MdDeleteSweep size="2rem" />
        </div>
      </div>

      <h3 className="text-left   m-0">{title}</h3>

      <p className=" h-11/12 m-0" dangerouslySetInnerHTML={getLink(note)}></p>
    </div>
  );
};

export default Note;
