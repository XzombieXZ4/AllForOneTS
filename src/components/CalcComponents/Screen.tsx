import { useContext } from "react";
import { CalcContext } from "../../context/CalcContext";

export const Screen = () => {
  const { CalcState } = useContext(CalcContext);
  return (
    <div className="bg-green-950 w-11/12 h-36 self-center mt-3 flex flex-col rounded-lg md:h-24 md:mt-6 lg:w-[30rem]">
      <p className=" flex flex-row-reverse pt-3 w-11/12 h-5/6 justify-self-center text-3xl text-black Press_Start_2P overflow-hidden md:text-5xl md:pt-7 md:self-center">
        {CalcState[0]}
      </p>
    </div>
  );
};
