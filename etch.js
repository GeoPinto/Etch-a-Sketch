const container = document.querySelector('div');

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows*cols); c++) {             //container is set as row and columns, loops the formation
        let cell = document.createElement('div');       //of cells as new div's --> see .css
        container.appendChild(cell).className = 'grid-item';
    };
};
makeGrid(16, 16);