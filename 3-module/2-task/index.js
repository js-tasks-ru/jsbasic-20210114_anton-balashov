/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
"use strict";

const isValidNumber = (arg) => {
  return (
    typeof arg === "number" &&
    !isNaN(arg) &&
    arg <= Number.MAX_SAFE_INTEGER &&
    arg >= Number.MIN_SAFE_INTEGER
  );
};

function filterRange(arr, a, b) {
  if (!Array.isArray(arr)) {
    throw new Error("first argument must be an array");
  }

  if (!isValidNumber(a)) {
    throw new Error("second argument must be a valid number");
  }

  if (!isValidNumber(b)) {
    throw new Error("third argument must be a valid number");
  }

  return arr.filter((el) => isValidNumber(el) && el >= a && el <= b);
}
