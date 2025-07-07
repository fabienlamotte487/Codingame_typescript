/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
var inputs = readline().split(' ');
const startRow = parseInt(inputs[0]);
const startCol = parseInt(inputs[1]);
const n = parseInt(readline());

/**
 * {
 *  id:numéro de la carte
 *  nm: nombre de mouvement
 *  valie: true | false
 * }
 */
let rm = [];
let maps = [];

// Stockage des cartes
for (let i = 0; i < n; i++) {
    let rows = [];
    for (let j = 0; j < h; j++) {
        const mapRow = readline();
        rows.push(mapRow.split(""));
    }
    maps.push(rows);
}

// On détermine quelle est la valeur actuelle de la position
function checkPosition(e, p){
    return e[p[0]][p[1]];
}

function checkNext(e,p){
    let position = [p[0], p[1]];
    switch(e[p[0]][p[1]]){
        case ">": position[1]++; break;
        case "<": position[1]--; break;
        case "\^": position[0]--; break;
        case "v": position[0]++; break;
        case "T": position = "FINISHED"; break;
        default: position = "ERROR"; break;
    }

    return position;
}

// Confrontation de l'exercice
maps.forEach((e,i) => {
    let p = [startRow,startCol];
    let moove_number = 0;
    let continuePath = true;
    let begin = true;

    while(continuePath){
        // On check si la position actuelle n'est pas un point - sinon on ferme la boucle
        let firstCheck = checkPosition(e,p);
        let valablePosition = [">","<","\^","v","T"];

        if(!valablePosition.includes(firstCheck) || (!begin && p[0] == startRow && p[1] == startCol)){ // On gère le cas où on est sur un point
            rm.push({
                id:i,
                nm:moove_number,
                valid:false,
                trap:true
            });
            continuePath = false;
        } else {
            // On détermine quel sera le mouvement suivant
            let nextPosition = checkNext(e,p);

            switch(nextPosition){
                case "FINISHED": 
                    rm.push({
                        id:i,
                        nm:moove_number+1,
                        valid:true
                    });
                    continuePath = false;
                    break;
                case "ERROR":
                    rm.push({
                        id:i,
                        nm:moove_number,
                        valid:false
                    });
                    continuePath = false;
                    break;
                default:
                    p = nextPosition;
                    moove_number++;
                    break;
            }
        }
        begin = false;
    }
});
let validMaps = rm.filter(e => e.valid == true);
if(validMaps.length == 0){
    console.log("TRAP");
} else {
    let count = validMaps[0].nm;
    validMaps.forEach(e => {
        if(e.nm <= count){
            count = e.nm;
        }
    });
    console.log(validMaps.filter(e => e.nm == count)[0].id);
}