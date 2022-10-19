// settings
const minRows = 1
const maxRows = 20
const minCols = 1
const maxCols = 20

// dom
const table = document.querySelector("table")

// listener
table.addEventListener("click", function (e) {
  let cell = e.target.closest('td')
  if (!cell) return
  colorCell(cell)
})

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

function colorCell(cell) {
  let row = cell.parentElement
  let color = document.querySelector("#color").value

  console.log(`--- Coloring Cell ${row.rowIndex},${cell.cellIndex} ${color} ---`)
  cell.style.backgroundColor = color
}

function colorAll() {
  let rows = table.rows
  let color = document.querySelector("#color").value
  for (let x = 0; x < rows.length; x++) {
    let rowCells = rows[x].children
    for (let y = 0; y < rowCells.length; y++) {
      if(rowCells[y].style.backgroundColor !== color) {
        rowCells[y].style.backgroundColor = color
      }
    }
  }
}

function colorEmpty() {
  let rows = table.rows
  let color = document.querySelector("#color").value
  for (let x = 0; x < rows.length; x++) {
    let rowCells = rows[x].children
    for (let y = 0; y < rowCells.length; y++) {
      if(rowCells[y].style.backgroundColor === "") {
        rowCells[y].style.backgroundColor = color
      }
    }
  }
}

function clearAll() {
  let rows = table.rows
  for (let x = 0; x < rows.length; x++) {
    let rowCells = rows[x].children
    for (let y = 0; y < rowCells.length; y++) {
      rowCells[y].style.backgroundColor = ""
    }
  }
}
