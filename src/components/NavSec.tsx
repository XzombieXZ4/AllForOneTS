import { Link } from "react-router-dom";

interface props {
  sec: string;
  location: string;
}

export const NavSec = ({ sec, location }: props) => {
  return (
    <Link
      to={`/${sec}`}
      className={`text-2xl grow flex py-1 justify-center ${
        "/" + sec === location
          ? "text-white bg-indigo-700 shadow-inner shadow-indigo-500"
          : "text-slate-400"
      }`}
    >
      {sec}
    </Link>
  );
};
