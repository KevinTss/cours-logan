const allPions = [
  'tour-black',
  'king-black',
  'queen-black',
  'cavalier-black',
  'pion-black',
  'fou-black',
  'tour-white',
  'king-white',
  'queen-white',
  'cavalier-white',
  'pion-white',
  'fou-white',
];

function getPionType(cell) {
  let p = null;
  cell.classList.forEach((className) => {
    const isInPionArray = allPions.includes(className);
    if (isInPionArray) {
      p = className;
    }
  });
  return p;
}

function onCellClicked(event) {
  const pion = getPionType(event.target);
  if (pion) {
    console.log('pos', getAvailablePionPositions(event.target.id, pion));
  }
}

function getPion(x, y, color) {
  const possibleX = [x];
  const possibleY = [];
  if (color === 'black') {
    possibleY.push(y + 1);
  } else {
    possibleY.push(y - 1);
  }

  const p = [];

  possibleX.forEach((currentX) => {
    possibleY.forEach((currentY) => {
      p.push(`${currentX}-${currentY}`);
    });
  });

  return p;
}

function getAvailablePionPositions(currentPosition, pionType) {
  // currentPosition = '2-7'
  const posArray = currentPosition.split('-'); // ["2", "7"]
  const posX = Number(posArray[0]); // 2
  const posY = Number(posArray[1]); // 7

  let availableCells;

  switch (pionType) {
    case 'pion-white':
    case 'pion-black':
      availableCells = getPion(posX, posY, pionType.split('-')[1]);
      break;
    default:
      availableCells = [];
  }

  return availableCells;
}
