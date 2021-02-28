/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
"use strict";

function makeFriendsList(friends) {
  if (!Array.isArray(friends)) {
    throw new Error("argument must be an array");
  }

  const list = document.createElement("ul");
  let itemsHTML = "";

  friends.forEach((item) => {
    itemsHTML += `<li>${item.firstName} ${item.lastName}</li>`;
  });

  list.innerHTML = itemsHTML;

  return list;
}
