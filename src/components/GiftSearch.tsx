import { GiftProvider } from "../context/GiftContext";
import { GiftsPage } from "./GiftComponents/GiftsPage";

export const GiftSearch = () => {
  return (
    <GiftProvider>
      <GiftsPage />
    </GiftProvider>
  );
};
