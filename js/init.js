const body = document.getElementById('body');

/**
 * numero-numero
 * ex: 3-4
 * ou:
 * 3 = l'axe X (horizontal)
 * 4 = l'axe Y (vertical)
 *
 * Chacun un min de 0 et max 7
 */
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

function createCell(id) {
  const cell = document.createElement('DIV');
  cell.classList.add('cell');
  cell.id = id;

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

  for (let y = 0; y < 8; y++) {
    const row = createRow();
    for (let x = 0; x < 8; x++) {
      const id = `${x}-${y}`;
      const cell = createCell(id);
      if (x === 0) cell.classList.add('nb');
      if (x === 0 && y === 0) cell.classList.add('un');
      if (x === 0 && y === 1) cell.classList.add('deux');
      if (x === 0 && y === 2) cell.classList.add('trois');
      if (x === 0 && y === 3) cell.classList.add('quatre');
      if (x === 0 && y === 4) cell.classList.add('cinq');
      if (x === 0 && y === 5) cell.classList.add('six');
      if (x === 0 && y === 6) cell.classList.add('sept');
      if (x === 0 && y === 7) cell.classList.add('huit');
      if (y === 0) cell.classList.add('lettre');
      if (x === 0 && y === 0) cell.classList.add('a');
      if (x === 1 && y === 0) cell.classList.add('b');
      if (x === 2 && y === 0) cell.classList.add('c');
      if (x === 3 && y === 0) cell.classList.add('d');
      if (x === 4 && y === 0) cell.classList.add('e');
      if (x === 5 && y === 0) cell.classList.add('f');
      if (x === 6 && y === 0) cell.classList.add('g');
      if (x === 7 && y === 0) cell.classList.add('h');
      addPion(y, x, cell);
      cell.addEventListener('click', onCellClicked);
      row.appendChild(cell);
    }
    plate.appendChild(row);
  }
  container.appendChild(plate);
}

createChess(body);
