/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
"use strict";

function getMinMax(str) {
  if (typeof str !== "string") {
    throw new Error("argument must be a string");
  }

  const strNumbers = [];
  let result = null;

  str.split(/[ ,]+/).forEach((el) => {
    const numberEl = Number(el);

    if (
      numberEl &&
      numberEl <= Number.MAX_SAFE_INTEGER &&
      numberEl >= Number.MIN_SAFE_INTEGER
    ) {
      strNumbers.push(numberEl);
    }
  });

  if (strNumbers.length > 0) {
    result = {
      min: Math.min(...strNumbers),
      max: Math.max(...strNumbers),
    };
  }

  return result;
}
