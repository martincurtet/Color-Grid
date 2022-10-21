// settings
const minRows = 1
const maxRows = 20
const minCols = 1
const maxCols = 20

// dom
const table = document.querySelector("table")

// listener
// table.addEventListener("click", function (e) {
//   let cell = e.target.closest('td')
//   if (!cell) return
//   colorCell(cell)
// })

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
    row.insertCell()
  }
}

function deleteRow() {
  if (countRows() <= 1) {
    console.log("Too few rows!")
    return
  }

  console.log("--- Deleting Row ---")
  table.deleteRow(-1)
}

function addCol() {
  if (countCols() >= maxCols) {
    console.log("Too many columns!")
    return
  }

  console.log("--- Adding Column ---")
  for (let i = 0; i < countRows(); i++) {
    table.rows[i].insertCell()
  }
}

function deleteCol() {
  if (countCols() <= 1) {
    console.log("Too few columns!")
    return
  }

  console.log("--- Deleting Column ---")
  for (let i = 0; i < countRows(); i++) {
    table.rows[i].deleteCell(-1)
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
  console.log(`--- Coloring All in ${capitalize(color)} ---`)
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
  console.log(`--- Coloring All Empty in ${capitalize(color)} ---`)
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
  console.log(`--- Clear All ---`)
  for (let x = 0; x < rows.length; x++) {
    let rowCells = rows[x].children
    for (let y = 0; y < rowCells.length; y++) {
      rowCells[y].style.backgroundColor = ""
    }
  }
}

// click and drag
table.addEventListener('mousedown', (e) => {
  console.log("--- Start Cell Selection ---")
  let startCell = e.target.closest('td')
  if(!startCell) return
  let startRow = startCell.parentElement
  selectionStart = [startRow.rowIndex, startCell.cellIndex]
})

table.addEventListener('mouseup', (e) => {
  console.log("--- Stop Cell Selection ---")
  let stopCell = e.target.closest('td')
  if(!stopCell) return
  let stopRow = stopCell.parentElement
  selectionEnd = [stopRow.rowIndex, stopCell.cellIndex]
  colorSelection()
})

let selectionStart = []
let selectionEnd = []
function colorSelection() {
  console.log(`--- Coloring Cell Selection [${selectionStart}], [${selectionEnd}] ---`)

  let rowStart = selectionStart[0] > selectionEnd[0] ? selectionEnd[0] : selectionStart[0]
  let rowEnd = selectionStart[0] > selectionEnd[0] ? selectionStart[0] : selectionEnd[0]
  let colStart = selectionStart[1] > selectionEnd[1] ? selectionEnd[1] : selectionStart[1]
  let colEnd = selectionStart[1] > selectionEnd[1] ? selectionStart[1] : selectionEnd[1]
  for (let i = rowStart; i <= rowEnd; i++) {
    for (let j = colStart; j <= colEnd; j++) {
      colorCell(table.rows[i].cells[j])
    }
  }
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
