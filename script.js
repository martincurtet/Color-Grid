// settings
const maxRows = 20

// dom
const tableBody = document.querySelector("table").tBodies[0]

function countRows() {
  return tableBody.children.length
}

function countCols() {
  return tableBody.children[0].children.length
}

function addRow() {
  if (countRows() >= maxRows) {
    console.log("Too many rows!")
    return
  }
  
  console.log("--- Adding Row ---")
  // create the row and fill it with cells
  let row = document.createElement("tr")
  for (let i = 0; i < countCols(); i++) {
    let cell = document.createElement("td")
    row.appendChild(cell)
  }

  // append to the table
  tableBody.appendChild(row)
}
