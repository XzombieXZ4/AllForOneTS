interface props {
  title: string;
  url: string;
}

export const GiftImg = ({ title, url }: props) => {
  return (
    <div className="flex flex-col max-w-[30%] bg-indigo-950 px-3 pt-1 pb-3 my-1 rounded-lg xl:max-w-[20%]">
      <h2 className="self-center pb-2">{title}</h2>
      <img className="self-center rounded-md object-cover grow" src={url} />
    </div>
  );
};
