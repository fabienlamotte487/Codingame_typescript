/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
let r = "Rock";
let p = "Paper";
let s = "Scissors";
let scenarios = [];
let opponents = [];
let possibilities = ["win", "loose", "draw"];

// Enrregistrement des adversaires
function save_opponents(){
    for (let i = 0; i < n; i++) {
        const a = readline();
        opponents.push(a);
    }
}

// On réordonne le tableau => les éléments avant le x se retrouvent à la fin du tableau
function ReOrderArray(array, x){
    let cut_array1 = array.slice(x);
    let cut_array2 = array.slice(0,x);
    return [...cut_array1, ...cut_array2];
}

function declare_sign(sign){
    let result = null;
    switch(sign){
        case r: result = p; break;
        case p: result = s; break;
        case s: result = r; break;
    }

    return result;
}

function confront(sign_player, sign_opponent){
    let result = "";

    // Gestion égalité
    sign_player == sign_opponent ? result = possibilities[2]:null; // draw

    // Paper 
    sign_player == p && sign_opponent == r ? result = possibilities[0]:null; // win
    sign_player == p && sign_opponent == s ? result = possibilities[1]:null; // loose

    // Rock
    sign_player == r && sign_opponent == s ? result = possibilities[0]:null; // win
    sign_player == r && sign_opponent == p ? result = possibilities[1]:null; // loose

    // Scissors
    sign_player == s && sign_opponent == p ? result = possibilities[0]:null; // win
    sign_player == s && sign_opponent == r ? result = possibilities[1]:null; // loose

    return result;
}

// Boucle de jeu
function play_scenarios(){
    // à l'index de chaque adversaire
    for(let x = 0; x <= opponents.length; x++){
        // On ordonne le tableau en fonction de l'index où l'on commence
        let new_array = ReOrderArray(opponents, x);
        let sign = "";
        let score = {
            win:0,
            draw:0,
            loose:0
        };
        
        // Pour chaque boucle, on joue avec le symbole désigné
        new_array.forEach((e,i) => {
            // Pour le premier combat, on déclare le mouvement gagnant avec lequel on va continuer par la suite
            if(i == 0){
                sign = declare_sign(e);
            } else {
                // On continue uniquement si le joueur n'a pas perdu
                if(score.loose == 0){
                    // Pour la suite des combats, on confronte les signes avec le signe enregistré
                    let result = confront(sign, e);

                    // On attribue le résultat au score
                    result == possibilities[0] ? score.win++:null; // On ajoute une victoire au score
                    result == possibilities[2] ? score.draw++:null; // On ajoute un "nulle" au score

                    // Si le joueur perds dans ce scénario, alors on enregistre
                    if(result == possibilities[1]){
                        score.loose++; // On ajoute une défaite au score.

                        let score_to_add = {};
                        score_to_add.name = [r,s,p].filter(e => e == sign)[0];  // On donne le non du signe
                        score_to_add.score = score;                             // On donne les scores obtenus
                        score_to_add.startingOpponent = x;                      // On donne l'adversaire de départ à rencontrer pour obtenir le meilleur nombre de victoires possible.

                        scenarios.push(score_to_add);
                    }
                }
            }
        })
    }
}

function compare_wins( a, b ) {
    if ( a.score.win < b.score.win ){
      return 1;
    }
    if ( a.score.win > b.score.win ){
      return -1;
    }
    return 0;
}

function compare_starting_opponents(a,b){
    if ( a.score.startingOpponent < b.score.startingOpponent ){
        return -1;
      }
      if ( a.score.startingOpponent > b.score.startingOpponent ){
        return 1;
      }
    return 0;
}

function confront_scenarios(){
    let new_array = scenarios.sort(compare_wins);
    let same_wins = new_array.filter(e => e.score.win == new_array[0].score.win);
    return result = same_wins.sort(compare_starting_opponents)[0];
}

function lecture_resultat(resultat){
    console.log(resultat.name);
    console.log(resultat.startingOpponent);
}

function main(){
    save_opponents(); // Enregistre les adversaires présent avec leur signes
    play_scenarios(); // Déroule tout les scénarios possible avec les signes
    let resultat = confront_scenarios(); // Trie les scénarios en fonction des victoires rencontrés 
    lecture_resultat(resultat); // Lis les résultats avec les victoires et adversaires rencontrés
}

main();