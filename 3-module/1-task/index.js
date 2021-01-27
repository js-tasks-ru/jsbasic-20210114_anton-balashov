/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
"use strict";

function namify(users) {
  if (!Array.isArray(users)) {
    throw new Error("argument must be an array");
  }

  return users.map((user) => user.name);
}
