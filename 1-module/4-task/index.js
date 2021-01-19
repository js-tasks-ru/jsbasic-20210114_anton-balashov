/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
const SPAM_PATTERN_1 = "1xBet";
const SPAM_PATTERN_2 = "XXX";

function checkSpam(str) {
  if (typeof str !== "string") {
    throw new Error("argument should be a string");
  }

  const lcStr = str.toLowerCase();

  return (
    lcStr.includes(SPAM_PATTERN_1.toLowerCase()) ||
    lcStr.includes(SPAM_PATTERN_2.toLowerCase())
  );
}
