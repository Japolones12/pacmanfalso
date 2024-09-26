const gameElement = document.getElementById('game');
const gridSize = 10;
let pacmanPosition = { x: 1, y: 1 };

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameElement.appendChild(cell);
    }
}

function drawPacman() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.innerHTML = ''); // Limpa a grid
    const pacmanCell = cells[pacmanPosition.y * gridSize + pacmanPosition.x];
    pacmanCell.innerHTML = '<div class="pacman"></div>'; // Desenha o Pac-Man
}

function movePacman(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (pacmanPosition.y > 0) pacmanPosition.y--;
            break;
        case 'ArrowDown':
            if (pacmanPosition.y < gridSize - 1) pacmanPosition.y++;
            break;
        case 'ArrowLeft':
            if (pacmanPosition.x > 0) pacmanPosition.x--;
            break;
        case 'ArrowRight':
            if (pacmanPosition.x < gridSize - 1) pacmanPosition.x++;
            break;
    }
    drawPacman();
}

createGrid();
drawPacman();
document.addEventListener('keydown', movePacman);
