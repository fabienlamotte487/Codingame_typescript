const color: string = readline();
const board: string[][] = [];
let queenPosition = { x: 0, y: 0 };

// Lecture du plateau et recherche de la reine
for (let y = 0; y < 8; y++) {
    const line: string = readline();
    const row = line.split("");
    const x = row.indexOf("Q");
    board.push(row);
    if (x !== -1) {
        queenPosition = { x, y };
    }
}

// Vérification d'une case
function checkIfPiece(pos: { x: number; y: number }): { stop: boolean; add: number } {
    const piece = board[pos.y][pos.x];
    if (piece === ".") return { stop: false, add: 1 };

    const isFriendly = (color === "white" && piece === "w") || (color === "black" && piece === "b");
    return { stop: true, add: isFriendly ? 0 : 1 };
}

// Fonction générique pour parcourir dans une direction donnée
function checkDirection(dx: number, dy: number): number {
    let x = queenPosition.x + dx;
    let y = queenPosition.y + dy;
    let count = 0;

    while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        const result = checkIfPiece({ x, y });
        count += result.add;
        if (result.stop) break;

        x += dx;
        y += dy;
    }

    return count;
}

// Toutes les directions possibles pour la reine
const directions = [
    { dx: -1, dy: 0 },  // gauche
    { dx: 1, dy: 0 },   // droite
    { dx: 0, dy: -1 },  // haut
    { dx: 0, dy: 1 },   // bas
    { dx: -1, dy: -1 }, // haut-gauche
    { dx: 1, dy: -1 },  // haut-droite
    { dx: -1, dy: 1 },  // bas-gauche
    { dx: 1, dy: 1 },   // bas-droite
];

// Calcul du total
const total = directions.reduce((sum, { dx, dy }) => sum + checkDirection(dx, dy), 0);

console.log(total);