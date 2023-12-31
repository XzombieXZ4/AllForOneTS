import { useState, ChangeEvent } from "react";
import { noteInterface, noteWithKey } from "../interfaces/ToDoInterfaces";

export const useTodo = () => {
  const [search, setSearch] = useState<string>("");
  const [n, setN] = useState<noteInterface>({ title: "", note: "" });
  const getInput = (val: ChangeEvent<HTMLInputElement>) => {
    setSearch(val.target.value);
  };
  const getNote = (val: ChangeEvent<HTMLTextAreaElement>) => {
    const note = val.target.value;
    setN({ ...n, note });
  };
  const getTitle = (val: ChangeEvent<HTMLInputElement>) => {
    const title = val.target.value;
    setN({ ...n, title });
  };
  const resetNote = () => {
    return setN({ title: "", note: "" });
  };
  const editN = (note: noteWithKey) => {};
  return {
    search,
    getInput,
    getNote,
    getTitle,
    resetNote,
    n,
  };
};
