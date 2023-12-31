import { eFirst, errorValues, operation, sRes } from "./calcHelpers";

export type CalcAction =
  | { type: "number"; value: number | string }
  | { type: "operation"; value: string }
  | { type: "user"; value: string };

export const calcReducer = (
  initialState: string[],
  action: CalcAction
): string[] => {
  if (errorValues.some((err) => err === initialState[0])) return [""];
  const { type, value } = action;
  switch (type) {
    case "number":
      if (initialState[2]) {
        if (initialState[2] == "=" || initialState[2] == "%")
          return [String(value), initialState[0]];
        return [String(value), initialState[0], "", initialState[2]];
      }
      if (!initialState[0]) {
        return [
          String(value),
          initialState[1],
          initialState[2],
          initialState[3],
        ];
      }
      if (initialState[0].length > 8)
        return [
          eFirst(initialState[0], value),
          initialState[1],
          initialState[2],
          initialState[3],
        ];
      if (value == "." && initialState[0].includes("."))
        return [
          initialState[0],
          initialState[1],
          initialState[2],
          initialState[3],
        ];
      return [
        initialState[0] + value,
        initialState[1],
        initialState[2],
        initialState[3],
      ];
    case "operation":
      if (value === "%")
        return [String(Number(initialState[0]) / 100), "", "%"];
      if (!initialState[3]) {
        return [initialState[0], initialState[0], value];
      } else {
        let res = operation(initialState[0], initialState[1], initialState[3]);
        if (res === undefined) return [""];
        return [sRes(String(res)), String(res), value];
      }
    case "user":
      switch (value) {
        case "AC":
          return [""];
        case "CE":
          return [eFirst(initialState[0], ""), initialState[1]];
        case "=":
          let res = operation(
            initialState[0],
            initialState[1],
            initialState[3]
          );
          if (res === undefined) return [""];
          return [sRes(String(res)), String(res), value];
      }
    default:
      return [""];
  }
};
