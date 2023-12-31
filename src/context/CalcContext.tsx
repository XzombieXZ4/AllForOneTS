import { createContext, useReducer } from "react";
import { calcReducer, CalcAction } from "../helpers/calcReducer";

interface CalcContextProps {
  CalcState: string[];
  getButton: (action: CalcAction) => void;
}

export const CalcContext = createContext<CalcContextProps>(
  {} as CalcContextProps
);

interface props {
  children: JSX.Element | JSX.Element[];
}

const calc: string[] = [];

export const CalcProvider = ({ children }: props) => {
  const [CalcState, dispatch] = useReducer(calcReducer, calc);
  const getButton = (action: CalcAction): void => {
    dispatch(action);
  };
  return (
    <CalcContext.Provider value={{ CalcState, getButton }}>
      {children}
    </CalcContext.Provider>
  );
};
