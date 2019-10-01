export function getNewGrid(size) {
  const gridSize = size * size;
  const grid = [];

  for (let index = 0; index < gridSize; index++) {
    grid.push({
      id: index,
      impassable: false,
      x: index % size,
      y: Math.floor(index / size)
    });
  }

  return grid;
}

export function resetGrid(grid) {
  return grid.map(item => {
    return {
      ...item,
      passage: false
    };
  });
}

/**
 * Set the new found paths on the grid and return a new grid
 * @param {Array} gridInfo
 * @param {Number} startingLoc
 * @param {Number} size
 * @param {Array} moves
 *  */
export function setFoundPaths(gridInfo, startingLoc, size, moves) {
  const clonedGrid = resetGrid(gridInfo);

  const startingIdx = clonedGrid.findIndex(item => item.id === startingLoc);

  clonedGrid[startingIdx] = {
    ...clonedGrid[startingIdx],
    passage: true
  };

  let currentIdx = startingIdx;

  moves.forEach(move => {
    switch (move) {
      case "U":
        currentIdx -= size;
        break;
      case "R":
        currentIdx += 1;
        break;
      case "D":
        currentIdx += size;
        break;
      case "L":
        currentIdx -= 1;
        break;

      default:
        break;
    }

    clonedGrid[currentIdx] = {
      ...clonedGrid[currentIdx],
      passage: true
    };
  });

  return clonedGrid;
}
