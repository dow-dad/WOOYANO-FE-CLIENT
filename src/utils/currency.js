import numeral from "numeral";
export const format = (amount, opt = "0a") => {
  return numeral(amount).format(opt).toUpperCase();
};