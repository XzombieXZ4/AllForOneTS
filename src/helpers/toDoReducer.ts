import { noteInterface, noteWithKey } from "../interfaces/ToDoInterfaces";
import { keyGen } from "./toDoHelpers";

type noteAction =
  | { type: "addNote"; n: noteInterface }
  | { type: "deleteNote"; key: string };

export const toDoReducer = (
  noteListState: noteWithKey[],
  action: noteAction
) => {
  switch (action.type) {
    case "addNote":
      const note: noteWithKey = { ...action.n, key: action.n.title + keyGen() };
      return [note, ...noteListState];
    case "deleteNote":
      const filterNote = noteListState.filter((note) => note.key != action.key);
      return [...filterNote];
    default:
      return noteListState;
  }
};
