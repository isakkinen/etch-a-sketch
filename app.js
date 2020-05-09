/*Globals*/
const boardSize = 600;

/*-------*/

const clearBtn = document.querySelector("button");
clearBtn.addEventListener("click", clearGrid);

/**Clears the grid area from all sketching, and prompts
 * user to give new resolution to the grid area
 */
function clearGrid(e) {
    const newBoardSize = prompt("Please input the resolution you want the sketching area to be:", 16);
    if (!newBoardSize) {return;}
    const gridContainer = document.querySelector("#grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    initGrid(newBoardSize, newBoardSize, boardSize, boardSize);
}

/**Creates a grid to be sketched on with given measures
 * @param gridColumns number of columns in the grid
 * @param gridRows number of rows in the grid
 * @param containerWidth width of the sketching area on page
 * @param containerHeight height of the sketching area on page
 */
function initGrid(gridColumns = 16, gridRows = 16,
    containerWidth = 100, containerHeight = 100) {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${gridColumns}, ${containerWidth/gridColumns}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridRows}, ${containerHeight/gridRows}px)`;
    for (let i = 0; i < gridRows; ++i) {
        for (let j = 0; j < gridColumns; ++j) {
            const newGrid = document.createElement("div");
            newGrid.classList.add("grid");
            newGrid.style.width = `${containerWidth/gridColumns}px`;
            newGrid.style.height = `${containerHeight/gridRows}px`;
            newGrid.style.backgroundColor = "#FFFFFF";
            newGrid.addEventListener("mouseover", fillGrid);
            newGrid.id = `grid${j}-${i}`;
            gridContainer.appendChild(newGrid);
        }
    }
}

/**Fills grid by adding 10% of black color to it */
function fillGrid(e) {
    const oldColor = e.target.style.backgroundColor;
    const rgb = parseRGB(oldColor);
    rgb[0] -= 255/10;
    rgb[1] -= 255/10;
    rgb[2] -= 255/10;
    const newRgb = `rgb(${rgb})`;
    e.target.style.backgroundColor = newRgb;
}

/**Takes a CSS style rgb-value and parses it in to an array
 * @param rgb CSS style rgb-value
 * @return Array with R, G, and B in their own indices
 */
function parseRGB(rgb) {
    return (rgb.substring(rgb.indexOf("(")+1, rgb.indexOf(")"))).split(",");
}

initGrid(16,16, boardSize,boardSize);