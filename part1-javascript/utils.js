// utils.js — named exports + one default export

export const add = (a, b) => a + b;

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const APP_VERSION = "1.0.0";

// Default export
export default function formatCurrency(amount) {
  return `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}