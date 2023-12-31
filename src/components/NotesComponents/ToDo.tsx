import { useContext } from "react";
import { NoteList } from "./";
import { ToDoContext } from "../../context/ToDoContext";
import { CreateN } from "./";

export const ToDo = () => {
  const { state, changeVisible, getInput } = useContext(ToDoContext);
  return (
    <>
      <input
        className="animate__animated animate__slideInLeft animate__fast mt-[7.6rem] mx-3 rounded-full w-9/12 h-12 text-2xl font-bold text-black px-4 py-1 self-center"
        placeholder="  Search ToDo"
        onChange={getInput}
      />
      <div className="animate__animated animate__backInDown flex flex-col overflow-hidden overflow-y-auto mt-4 ">
        <NoteList />
      </div>

      <button
        className={`fixed bottom-4 right-4 mr-1 flex flex-row border-solid border-2 animate__animated animate__faster border-white h-14 w-14 rounded-full bg-indigo-950 hover:bg-indigo-700  hover:shadow-indigo-500  hover:shadow-md active:shadow-inner active:shadow-slate-950 ${
          state ? "animate__slideInUp" : "-z-50 animate__fadeOutRight"
        }`}
        onClick={changeVisible}
      >
        <i className=" material-symbols-rounded self-center text-4xl pl-1.5 pt-0.5">
          edit_square
        </i>
      </button>
      <CreateN />
    </>
  );
};
