import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import { GifProps, GiftProps } from "../interfaces/GiftInterfaces";

export const useGift = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [images, setImages] = useState<GiftProps[]>([]);
  const getGifts = async (value: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ci87TJo8LAcQM7JAlKYdYITATjzI58PJ&q=${value}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
    const gifts = data.map((img: GifProps) => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    }));
    return gifts;
  };
  const onSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };
  const onEnterDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") return setCategory(search);
  };
  const getImages = async () => {
    const newImages = await getGifts(category);
    return setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, [category]);
  return { onSearch, onEnterDown, images };
};
