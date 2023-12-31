import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import { noteInterface } from "../../interfaces/ToDoInterfaces";

interface props {
  not: noteInterface;
}

export const Note = ({ not: { note, title, key } }: props) => {
  const { changeVisible, deleteNote, editT } = useContext(ToDoContext);
  return (
    <>
      {title && <h4 className="text-xl font-semibold pl-4">{title}</h4>}
      {note && (
        <p className="break-words pl-4 mt-1 max-h-32 overflow-scroll overflow-x-hidden overflow-y-hidden">
          {note}
        </p>
      )}
      <button
        className="self-start mt-2 w-10 h-8"
        onClick={() => deleteNote(key)}
      >
        <i className="material-symbols-rounded">delete</i>
      </button>
      <button
        className="absolute right-3 bottom-1.5 w-10 h-10"
        onClick={() => {
          editT({ note, title, key });
          changeVisible();
        }}
      >
        <i className="material-symbols-rounded">edit</i>
      </button>
    </>
  );
};
