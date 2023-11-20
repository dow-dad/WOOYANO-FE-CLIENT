import numeral from "numeral";
export const format = (amount) => {
  return numeral(amount).format("₩0,0");
};