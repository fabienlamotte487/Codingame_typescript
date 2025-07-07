/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// Chaque joueur a:
// son numéro
// son signe
// sa liste d'adversaire rencontré
let players = []
let tournamentRound = []

// Renvoi l'objet gagnant
function findLooser(a,b){

    // En cas d'égalité
    if(a.sign === b.sign){
        return a.num > b.num ? a : b
    } else {
        // Sinon, on se sert des règles instaurées
        return a.sign == "C" && b.sign == "P" ? b : 
            a.sign == "P" && b.sign == "R" ? b : 
            a.sign == "R" && b.sign == "L" ? b : 
            a.sign == "L" && b.sign == "S" ? b : 
            a.sign == "S" && b.sign == "C" ? b : 
            a.sign == "C" && b.sign == "L" ? b : 
            a.sign == "L" && b.sign == "P" ? b :
            a.sign == "P" && b.sign == "S" ? b :
            a.sign == "S" && b.sign == "R" ? b :
            a.sign == "R" && b.sign == "C" ? b : 
            a.sign == "R" && b.sign == "C" ? b : a
    }
}

function go_fight(r){
    r.forEach(e => {
        let looser = findLooser(e[0], e[1]);
        let gagnant = looser == e[0] ? e[1] : e[0]
        gagnant.opponents.push(looser.num)
        players = players.filter(element => element.num != looser.num)
        // On supprime le perdant de la liste des joueurs
    })
}

function format_players(p,r){
    for(let x = 0; x <  p.length; x+=2){
        r.push([p[x], p[x+1]])
    }
}

function format_result (player){
    let result = ''
    player.opponents.forEach(e => {
        result += e + " "
    })
    return result.trim()
}

const N = parseInt(readline());

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const NUMPLAYER = parseInt(inputs[0]);
    const SIGNPLAYER = inputs[1];
    players.push({num:NUMPLAYER, sign:SIGNPLAYER, opponents: []})
}

while(players.length != 1){
    format_players(players, tournamentRound)
    go_fight(tournamentRound)
    tournamentRound = []
}

console.log(players[0].num)
console.log(format_result(players[0]))