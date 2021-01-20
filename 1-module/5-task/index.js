/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (typeof str !== "string") {
    throw new Error("first argument should be a string");
  }

  if (
    typeof maxlength !== "number" ||
    isNaN(maxlength) ||
    maxlength > Number.MAX_SAFE_INTEGER ||
    maxlength < Number.MIN_SAFE_INTEGER
  ) {
    throw new Error("second argument should be a number");
  }

  if (str.length <= maxlength) {
    return str;
  }

  return str.slice(0, maxlength - 1) + "…";
}
