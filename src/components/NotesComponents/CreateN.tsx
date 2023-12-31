import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

export const CreateN = () => {
  const { state, changeVisible, addNote, getTitle, getNote, resetNote, note } =
    useContext(ToDoContext);
  return (
    <div
      className={`fixed top-[7.5rem] left-4 mx-3.5 animate__animated animate__faster w-10/12  h-96 flex flex-col grow bg-indigo-800 rounded-lg md:left-12 lg:left-[4.6rem] xl:left-[5.6rem] 2xl:left-[9.2rem] ${
        state ? "animate__zoomOut -z-50" : "animate__zoomIn"
      }`}
    >
      <input
        value={note.title}
        className="w-10/12 h-8 mt-3 ml-5 pl-2 text-xl font-semibold rounded-lg bg-transparent"
        placeholder="Write Title"
        onChange={getTitle}
      />
      <textarea
        value={note.note}
        className="w-11/12 mt-4 ml-3 grow px-2 text-xl rounded-md bg-transparent"
        placeholder="Write ToDo"
        onChange={getNote}
      />
      <button
        className="flex absolute right-5 bottom-4 h-10 w-10"
        onClick={() => {
          addNote();
          changeVisible();
          resetNote();
        }}
      >
        <i className="material-symbols-rounded self-center pl-1 text-4xl">
          done
        </i>
      </button>
      <button
        className="flex realtive ml-2 mb-3.5 mt-2 h-10 w-10"
        onClick={() => {
          changeVisible(), resetNote();
        }}
      >
        <i className="material-symbols-rounded self-center pl-1 text-4xl">
          close
        </i>
      </button>
    </div>
  );
};
