function initGrid(containerWidth = 16, containerHeight = 16,
    gridWidth = 100, gridHeight = 100) {
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${containerWidth}, ${gridWidth}px)`;
    for (let i = 0; i < containerHeight; ++i) {
        for (let j = 0; j < containerWidth; ++j) {
            const newGrid = document.createElement("div");
            newGrid.style.width = `${gridWidth}px`;
            newGrid.style.height = `${gridHeight}px`;
            newGrid.id = `grid${j}-${i}`;
            gridContainer.appendChild(newGrid);
        }
    }
}

initGrid(16,16, 32,32);