export const useGift = () => {
  const getGifts = async (value: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ci87TJo8LAcQM7JAlKYdYITATjzI58PJ&q=${value}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    }));
    return gifts;
  };
  return { getGifts };
};
