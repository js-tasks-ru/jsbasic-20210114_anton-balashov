/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
"use strict";

function sumSalary(salaries) {
  if (typeof salaries !== "object" || Array.isArray(salaries)) {
    throw new Error("argument must be an object");
  }

  let sum = 0;

  for (const key in salaries) {
    const salary = salaries[key];

    if (
      typeof salary !== "number" ||
      isNaN(salary) ||
      salary > Number.MAX_SAFE_INTEGER ||
      salary < Number.MIN_SAFE_INTEGER
    ) {
      continue;
    }

    sum += salary;
  }

  return sum;
}
