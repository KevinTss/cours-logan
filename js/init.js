const body = document.getElementById('body');

const pions = {
  '0-0': 'tour-black',
  '0-7': 'tour-black',
  '0-3': 'king-black',
  '0-4': 'queen-black',
  '0-1': 'cavalier-black',
  '0-6': 'cavalier-black',
  '1-0': 'pion-black',
  '1-1': 'pion-black',
  '1-2': 'pion-black',
  '1-3': 'pion-black',
  '1-4': 'pion-black',
  '1-5': 'pion-black',
  '1-6': 'pion-black',
  '1-7': 'pion-black',
  '0-2': 'fou-black',
  '0-5': 'fou-black',
  '7-0': 'tour-white',
  '7-7': 'tour-white',
  '7-3': 'king-white',
  '7-4': 'queen-white',
  '7-1': 'cavalier-white',
  '7-5': 'cavalier-white',
  '6-0': 'pion-white',
  '6-1': 'pion-white',
  '6-2': 'pion-white',
  '6-3': 'pion-white',
  '6-4': 'pion-white',
  '6-4': 'pion-white',
  '6-5': 'pion-white',
  '6-6': 'pion-white',
  '6-7': 'pion-white',
  '7-2': 'fou-white',
  '7-6': 'fou-white',
};

function createPlateau() {
  const div = document.createElement('DIV');
  div.classList.add('tableau');

  return div;
}

function createRow() {
  const div = document.createElement('DIV');
  div.classList.add('row');

  return div;
}

function createCell(row) {
  const cell = document.createElement('DIV');
  cell.classList.add('cell');

  return cell;
}

function addPion(x, y, cell) {
  const getPion = pions[`${x}-${y}`];
  if (getPion) {
    cell.classList.add(getPion);
  }
}

function createChess(container) {
  const plate = createPlateau();

  for (let i = 0; i < 8; i++) {
    const row = createRow();
    for (let y = 0; y < 8; y++) {
      const cell = createCell();
      if (y === 0) cell.classList.add('nb');
      if (y === 0 && i === 0) cell.classList.add('un');
      if (y === 0 && i === 1) cell.classList.add('deux');
      if (y === 0 && i === 2) cell.classList.add('trois');
      if (y === 0 && i === 3) cell.classList.add('quatre');
      if (y === 0 && i === 4) cell.classList.add('cinq');
      if (y === 0 && i === 5) cell.classList.add('six');
      if (y === 0 && i === 6) cell.classList.add('sept');
      if (y === 0 && i === 7) cell.classList.add('huit');
      if (i === 7) cell.classList.add('lettre');
      if (y === 0 && i === 7) cell.classList.add('a');
      if (y === 1 && i === 7) cell.classList.add('b');
      if (y === 2 && i === 7) cell.classList.add('c');
      if (y === 3 && i === 7) cell.classList.add('d');
      if (y === 4 && i === 7) cell.classList.add('e');
      if (y === 5 && i === 7) cell.classList.add('f');
      if (y === 6 && i === 7) cell.classList.add('g');
      if (y === 7 && i === 7) cell.classList.add('h');
      addPion(i, y, cell);
      row.appendChild(cell);
    }
    plate.appendChild(row);
  }
  container.appendChild(plate);
}

createChess(body);
