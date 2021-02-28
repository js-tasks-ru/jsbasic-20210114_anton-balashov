/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
"use strict";

function makeDiagonalRed(table) {
  if (!table instanceof HTMLTableElement) {
    throw new Error("argument must be an instance of HTMLTableElement");
  }

  for (const row of table.rows) {
    const diagonalCell = row.cells[row.rowIndex];

    diagonalCell.style.backgroundColor = "red";
  }
}
