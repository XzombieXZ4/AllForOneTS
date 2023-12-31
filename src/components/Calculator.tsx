import { CalcProvider } from "../context/CalcContext";
import { Keyboard, Screen } from "./CalcComponents/";

export const Calculator = () => {
  return (
    <CalcProvider>
      <div className="animate__animated animate__slideInLeft animate__fast flex place-content-center w-screen grow shrink-0 mt-24">
        <div className="flex flex-col bg-cyan-800 w-96 h-72 mt-5 mx-3 rounded-lg md:w-[36rem] md:h-[28rem] lg:w-[32rem] lg:h-[26rem]">
          <Screen />
          <Keyboard />
        </div>
      </div>
    </CalcProvider>
  );
};
