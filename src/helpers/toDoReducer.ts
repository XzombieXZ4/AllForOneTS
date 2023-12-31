import { noteInterface } from "../interfaces/ToDoInterfaces";
import { keyGen } from "./toDoHelpers";

type noteAction =
  | { type: "addNote"; n: noteInterface }
  | { type: "editNote"; n: noteInterface }
  | { type: "deleteNote"; key: string };

export const toDoReducer = (
  noteListState: noteInterface[],
  action: noteAction
) => {
  switch (action.type) {
    case "addNote":
      const note: noteInterface = {
        ...action.n,
        key: action.n.title + keyGen(),
      };
      return [note, ...noteListState];
    case "editNote":
      const newState: noteInterface[] = noteListState.map((n) => {
        if (n.key == action.n.key)
          return {
            key: action.n.key,
            title: action.n.title,
            note: action.n.note,
          };
        return n;
      });
      return newState;
    case "deleteNote":
      const filterNote = noteListState.filter((note) => {
        if (note.key != action.key) return note;
      });
      return [...filterNote];
    default:
      return noteListState;
  }
};
