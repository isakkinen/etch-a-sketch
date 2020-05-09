const clearBtn = document.querySelector("button");
clearBtn.addEventListener("click", clearGrid);

/**Clears the grid area from all sketching, and prompts
 * user to give new resolution to the grid area
 */
function clearGrid(e) {
    const gridContainer = document.querySelector("#grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    const newBoardSize = prompt("Please input how many grids you want the board to consist of:");
    initGrid(newBoardSize, newBoardSize, 960, 960);
}

function initGrid(gridColumns = 16, gridRows = 16,
    containerWidth = 100, containerHeight = 100) {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, ${containerWidth/gridColumns}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridRows}, ${containerHeight/gridRows}px)`;
    for (let i = 0; i < gridRows; ++i) {
        for (let j = 0; j < gridColumns; ++j) {
            const newGrid = document.createElement("div");
            newGrid.style.width = `${containerWidth/gridColumns}px`;
            newGrid.style.height = `${containerHeight/gridRows}px`;
            newGrid.addEventListener("mouseover", fillGrid);
            newGrid.id = `grid${j}-${i}`;
            gridContainer.appendChild(newGrid);
        }
    }
}

function fillGrid(e) {
    e.target.classList.add("filled");
}

initGrid(16,16, 960,960);