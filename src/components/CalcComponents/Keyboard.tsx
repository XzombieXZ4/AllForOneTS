import { KButtonN, KButtonO, KButtonU } from "./";

export const Keyboard = () => {
  return (
    <>
      <table className="self-center pt-3 border-separate border-spacing-2 md:pt-3">
        <tbody>
          <tr>
            <KButtonU value={"AC"} />
            <KButtonN value={"1"} />
            <KButtonN value={"2"} />
            <KButtonN value={"3"} />
            <KButtonO value={"X"} />
          </tr>
          <tr>
            <KButtonU value={"CE"} />
            <KButtonN value={"4"} />
            <KButtonN value={"5"} />
            <KButtonN value={"6"} />
            <KButtonO value={"÷"} />
          </tr>
          <tr>
            <KButtonO value={"+"} />
            <KButtonN value={"7"} />
            <KButtonN value={"8"} />
            <KButtonN value={"9"} />
            <KButtonO value={"%"} />
          </tr>
          <tr>
            <KButtonO value={"-"} />
            <KButtonN value={"0"} />
            <KButtonN value={"00"} />
            <KButtonN value={"."} />
            <KButtonU value={"="} />
          </tr>
        </tbody>
      </table>
    </>
  );
};
