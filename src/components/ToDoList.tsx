import { ToDoProvider } from "../context/ToDoContext.tsx";

import { ToDo } from "./NotesComponents/ToDo.tsx";

export const ToDoList = () => {
  return (
    <ToDoProvider>
      <ToDo />
    </ToDoProvider>
  );
};
