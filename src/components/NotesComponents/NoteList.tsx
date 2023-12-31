import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import { Note } from "./Note";

export const NoteList = () => {
  const { noteListState, search } = useContext(ToDoContext);
  return (
    <ul className="my-2.5 flex flex-col gap-2">
      {noteListState.map((n) => {
        if (n.title.includes(search) || n.note.includes(search))
          return (
            <li
              key={n.key}
              className="relative flex flex-col p-2 w-10/12 rounded-lg bg-indigo-950 self-center"
            >
              <Note not={n} />
            </li>
          );
      })}
    </ul>
  );
};
