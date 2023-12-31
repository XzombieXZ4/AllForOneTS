import { createContext, useReducer, useState, ChangeEvent } from "react";
import { noteInterface, noteWithKey } from "../interfaces/ToDoInterfaces";
import { toDoReducer } from "../helpers/toDoReducer";
import { useTodo } from "../hooks/useTodo";

interface ToDoContextProps {
  noteListState: noteWithKey[];
  state: boolean;
  note: noteInterface;
  changeVisible: () => void;
  getInput: (val: ChangeEvent<HTMLInputElement>) => void;
  getTitle: (val: ChangeEvent<HTMLInputElement>) => void;
  getNote: (val: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteNote: (key: string) => void;
  resetNote: () => void;
  addNote: () => void;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ToDoContext = createContext<ToDoContextProps>(
  {} as ToDoContextProps
);

const initialState: noteWithKey[] = [];

export const ToDoProvider = ({ children }: props) => {
  const [noteListState, dispatch] = useReducer(toDoReducer, initialState);
  const [visible, setVisible] = useState<boolean>(true);
  const { getInput, getNote, getTitle, resetNote, n } = useTodo();
  const changeVisible = () => {
    setVisible(!visible);
    console.log(noteListState);
  };
  const addNote = () => {
    dispatch({ type: "addNote", n });
  };
  const deleteNote = (key: string) => {
    dispatch({ type: "deleteNote", key });
  };
  return (
    <ToDoContext.Provider
      value={{
        noteListState,
        note: n,
        state: visible,
        changeVisible,
        addNote,
        deleteNote,
        getInput,
        getNote,
        getTitle,
        resetNote,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
