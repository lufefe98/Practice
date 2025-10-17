// Select Items

const tableContainer = document.getElementById('table-container')
const table = document.createElement('table')


// Function

function createTable(rows, cols) {
    // For Loop

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr')


        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('td')
            cell.textContent = `Row ${i + 1} - Col ${j + 1}`
            row.appendChild(cell)
        }

        table.appendChild(row)
    }

    tableContainer.appendChild(table)
}


createTable(5, 3)