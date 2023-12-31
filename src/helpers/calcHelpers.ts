export const errorValues: any[] = [
  undefined,
  "undefined",
  NaN,
  "NaN",
  Infinity,
  "Infinity",
];

export const eFirst = (screen: string, value: string | number) => {
  if (value === "00") return screen.slice(1, screen.length - 1) + value;
  return screen.slice(1, screen.length) + value;
};

export const operation = (a: string, b: string, sing: string) => {
  switch (sing) {
    case "+":
      return Number(b) + Number(a);
    case "-":
      return Number(b) - Number(a);
    case "X":
      return Number(b) * Number(a);
    case "÷":
      return Number(b) / Number(a);
  }
};

export const sRes = (value: string) => {
  return value.slice(0, 9);
};
