import { useContext } from "react";
import { GiftContext } from "../../context/GiftContext";
import { GiftList } from "./GiftList";

export const GiftsPage = () => {
  const { onSearch, onEnterDown } = useContext(GiftContext);
  return (
    <div className="text-white flex flex-col overflow-hidden">
      <input
        id="search"
        className="animate__animated animate__slideInLeft animate__fast mt-[7.6rem] mx-3 rounded-full w-9/12 h-12 text-2xl font-bold text-black px-4 py-1 self-center"
        placeholder="  Search Gift"
        onChange={onSearch}
        onKeyDown={onEnterDown}
      />
      <GiftList />
    </div>
  );
};
