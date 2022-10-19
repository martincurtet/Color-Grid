// settings
const minRows = 1
const maxRows = 20
const minCols = 1
const maxCols = 20

// dom
const table = document.querySelector("table")

// functions
function countRows() {
  return table.rows.length
}

function countCols() {
  return table.rows[0].cells.length
}

function addRow() {
  if (countRows() >= maxRows) {
    console.log("Too many rows!")
    return
  }
  
  console.log("--- Adding Row ---")
  let row = table.insertRow()
  for (let i = 0; i < countCols(); i++) {
    let cell = document.createElement("td")
    row.appendChild(cell)
  }
}

function deleteRow() {
  if (countRows() <= 1) {
    console.log("Too few rows!")
    return
  }

  console.log("--- Deleting Row ---")
  table.deleteRow(countRows() - 1)
}

function addCol() {
  if (countCols() >= maxCols) {
    console.log("Too many columns!")
    return
  }

  console.log("--- Adding Column ---")
  let rows = table.rows
  for (let i = 0; i < rows.length; i++) {
    let cell = document.createElement("td")
    rows[i].appendChild(cell)
  }
}

function deleteCol() {
  if (countCols() <= 1) {
    console.log("Too few columns!")
    return
  }

  console.log("--- Deleting Column ---")
  let rows = table.rows
  for (let i = 0; i < rows.length; i++) {
    let cell = rows[i].children[rows[i].children.length - 1]
    cell.remove()
  }
}