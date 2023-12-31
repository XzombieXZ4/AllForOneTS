import { Route, Routes } from "react-router-dom";
import "./index.css";
import { NavBar, Home, ToDoList, Calculator, GiftSearch } from "./components/";
import "animate.css";

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/GiftSearch" element={<GiftSearch />} />
      </Routes>
    </>
  );
};
