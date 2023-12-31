import { useContext } from "react";
import { button } from "../../interfaces/CalcInterfaces";
import { CalcContext } from "../../context/CalcContext";

export const KButtonO = ({ value }: button) => {
  const { getButton } = useContext(CalcContext);
  return (
    <td>
      <button
        className="bg-slate-700 w-14 h-10 ring-2 ring-slate-900 font-bold text-2xl text-gray-950 active:shadow-inner active:shadow-slate-900 md:w-24 md:h-16 md:text-5xl lg:text-5xl lg:h-14 lg:w-20"
        onClick={() => getButton({ type: "operation", value })}
      >
        {value}
      </button>
    </td>
  );
};
