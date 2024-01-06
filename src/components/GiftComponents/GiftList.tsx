import { useContext } from "react";
import { GiftContext } from "../../context/GiftContext";
import { GiftImg } from "./GiftImg";

export const GiftList = () => {
  const { images } = useContext(GiftContext);
  return (
    <div className="p-5 pt-2 mt-3 h-full flex gap-5 item-start justify-center flex-wrap overflow-hidden overflow-y-auto">
      {images.map((gift) => (
        <GiftImg key={gift.id} title={gift.title} url={gift.url} />
      ))}
    </div>
  );
};
