export function numberFormat(number, options = {
  maximumFractionDigits: 3
}) {
  return new Intl.NumberFormat("en-IN", options).format(number);
}