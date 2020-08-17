const container = document.querySelector('.container');
makeGrid(16, 16);
line();

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows*cols); c++) {             //container is set as row and columns, loops the formation
        let cell = document.createElement('div');       //of cells as new div's --> see .css
        cell.id = c + 1;        
        container.appendChild(cell).classList = 'cell';
    } 
}

function line() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {      //on mouseover, cell will adopt .line css style
            cell.classList.add("line");
        });
    });
    }






