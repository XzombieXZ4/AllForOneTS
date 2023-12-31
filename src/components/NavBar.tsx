import { Link, useLocation } from "react-router-dom";
import { NavSec } from "./";

export const NavBar = () => {
  let { pathname } = useLocation();
  return (
    <div className="absolute bg-indigo-950 grid w-screen h-26 shrink-0 ">
      <Link
        className={`
          text-5xl px-9 text-slate-700 place-self-center hover:text-slate-600 cursor-pointer 
          ${pathname === "/" ? "!text-white" : ""}
        `}
        to="/"
      >
        All-for-One
      </Link>
      <div className=" flex justify-between mt-1">
        <NavSec sec={"Calculator"} location={pathname} />
        <NavSec sec={"ToDoList"} location={pathname} />
        <NavSec sec={"GiftSearch"} location={pathname} />
      </div>
    </div>
  );
};
