// Select elements
const gridContainer = document.querySelector('#grid-container');
const reverseButton = document.getElementById('reverse-btn');
let table = null;

// Create grid (nested for loops)
function createGrid(rows, cols) {
  // Clear any existing content
  gridContainer.innerHTML = '';

  // Create a fresh table
  table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.textContent = `${i + 1},${j + 1}`;         // optional label
      td.classList.add('grid-cell');                 // optional class for styling
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  gridContainer.appendChild(table);

  // After building the table, add click listeners to each cell
  addCellListeners();
}

// Add click listeners to all table cells using forEach
function addCellListeners() {
  // querySelectorAll returns a NodeList — forEach works on it
  const cells = table.querySelectorAll('td');

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      cell.classList.toggle('selected'); // toggle selected class
    });
  });
}

// Reverse the order of all cells when the button is clicked
reverseButton.addEventListener('click', () => {
  if (!table) return;

  // Use spread operator to convert NodeList to an array so we can reverse it
  const cellsArray = [...table.querySelectorAll('td')];
  cellsArray.reverse();

  // Determine rows/cols from the current table
  const rows = table.rows.length;
  const cols = rows > 0 ? table.rows[0].cells.length : 0;

  // Build a new table using the reversed cells
  const newTable = document.createElement('table');
  let index = 0;

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      // append the next cell from the reversed array
      tr.appendChild(cellsArray[index++]);
    }
    newTable.appendChild(tr);
  }

  // Replace the old table in the DOM and update the reference
  gridContainer.replaceChild(newTable, table);
  table = newTable;

  // Note: event handlers and classes on the moved td elements are preserved
});

// initialize
createGrid(5, 5);
