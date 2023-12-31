import { useState, ChangeEvent } from "react";
import { noteInterface } from "../interfaces/ToDoInterfaces";

export const useTodo = () => {
  const [search, setSearch] = useState<string>("");
  const [n, setN] = useState<noteInterface>({ title: "", note: "", key: "" });
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
    return setN({ title: "", note: "", key: "" });
  };
  const editT = ({ note, title, key }: noteInterface) => {
    setN({ note, title, key });
  };
  return {
    search,
    getInput,
    getNote,
    getTitle,
    resetNote,
    editT,
    n,
  };
};
