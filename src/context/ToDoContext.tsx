import {
  createContext,
  useReducer,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import { noteInterface } from "../interfaces/ToDoInterfaces";
import { toDoReducer } from "../helpers/toDoReducer";
import { useTodo } from "../hooks/useTodo";

interface ToDoContextProps {
  noteListState: noteInterface[];
  state: boolean;
  note: noteInterface;
  search: string;
  changeVisible: () => void;
  getInput: (val: ChangeEvent<HTMLInputElement>) => void;
  getTitle: (val: ChangeEvent<HTMLInputElement>) => void;
  getNote: (val: ChangeEvent<HTMLTextAreaElement>) => void;
  deleteNote: (key: string) => void;
  resetNote: () => void;
  addNote: () => void;
  editT: (note: noteInterface) => void;
  editNote: (key: string) => void;
}

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ToDoContext = createContext<ToDoContextProps>(
  {} as ToDoContextProps
);

const initialState: noteInterface[] = [];
const init = () => {
  return JSON.parse(localStorage.getItem("toDoList") || "");
};

export const ToDoProvider = ({ children }: props) => {
  const [noteListState, dispatch] = useReducer(toDoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(noteListState));
  }, [noteListState]);

  const [visible, setVisible] = useState<boolean>(true);
  const { getInput, getNote, getTitle, resetNote, n, search, editT } =
    useTodo();
  const changeVisible = () => {
    setVisible(!visible);
  };
  const addNote = () => {
    dispatch({ type: "addNote", n });
  };
  const deleteNote = (key: string) => {
    dispatch({ type: "deleteNote", key });
  };
  const editNote = (key: string) => {
    dispatch({ type: "editNote", n: { ...n, key } });
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
        search,
        editT,
        editNote,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
