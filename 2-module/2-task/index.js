/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
"use strict";

function isEmpty(obj) {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("argument must be an object");
  }

  return Object.keys(obj).length === 0;
}
