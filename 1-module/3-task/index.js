/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (typeof str !== "string") {
    throw new Error("argument should be a string");
  }

  return str && str.charAt(0).toUpperCase() + str.slice(1);
}
