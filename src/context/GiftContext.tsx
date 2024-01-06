import { ChangeEvent, createContext, KeyboardEvent } from "react";
import { useGift } from "../hooks/useGift";
import { GiftProps } from "../interfaces/GiftInterfaces";

interface GiftContextProps {
  onSearch: (value: ChangeEvent<HTMLInputElement>) => void;
  onEnterDown: (val: KeyboardEvent<HTMLInputElement>) => void;
  images: GiftProps[];
}

export const GiftContext = createContext<GiftContextProps>(
  {} as GiftContextProps
);

interface props {
  children: JSX.Element | JSX.Element[];
}

export const GiftProvider = ({ children }: props) => {
  const { onSearch, onEnterDown, images } = useGift();
  return (
    <GiftContext.Provider value={{ onSearch, onEnterDown, images }}>
      {children}
    </GiftContext.Provider>
  );
};
