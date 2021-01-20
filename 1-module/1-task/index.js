/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return null;
  }

  if (n <= 1) {
    return 1;
  }

  let result = null;
  let step = n - 1;

  while (step > 1) {
    result = (result || n) * step;
    step--;
  }

  return result;
}
