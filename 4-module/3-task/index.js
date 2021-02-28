/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
"use strict";

function highlight(table) {
  if (!table instanceof HTMLTableElement) {
    throw new Error("argument must be an instance of HTMLTableElement");
  }

  for (const row of table.tBodies[0].children) {
    const available = row.cells[3].dataset.available;
    const gender = row.cells[2].innerHTML;
    const age = Number(row.cells[1].innerHTML);

    if (!available) {
      row.hidden = true;
    } else {
      if (available === "true") {
        row.classList.add("available");
      }

      if (available === "false") {
        row.classList.add("unavailable");
      }
    }

    if (gender === "m") {
      row.classList.add("male");
    } else if (gender === "f") {
      row.classList.add("female");
    }

    if (age && age < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
