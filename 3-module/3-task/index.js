/**
 * @param {string} str
 * @returns {string}
 */
"use strict";

function camelize(str) {
  if (typeof str !== "string") {
    throw new Error("argument must be a string");
  }

  let indexToCapitalize = null;

  // str.split('') splits string into UTF-16 coding units, so surrogates will be broken:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return Array.from(str)
    .map((el, i) => {
      if (el === "-") {
        indexToCapitalize = i + 1;

        return null;
      }

      return i === indexToCapitalize ? el.toUpperCase() : el;
    })
    .join("");
}
