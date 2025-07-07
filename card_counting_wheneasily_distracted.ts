/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const streamOfConsciousness = readline();
const bustThreshold = parseInt(readline());

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let cards = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"];
let regex = new RegExp(/^[2-9TJQKA]+$/);
let a = streamOfConsciousness.split(".");
let deck = [];

function constructDeck(){
    cards.forEach((e,i) => {
        let objectCard = {
            id:i,
            value:e,
            resumeNumber:4
        }
        deck.push(objectCard);
    })
}

function drawPhase(){
    a.forEach(e => {
        if(regex.test(e)){
            // console.log(e)
            let lineSplitted = e.split("");
            lineSplitted.forEach(x => {
                let cardFound = deck.filter(elem => elem.value == x)[0];
                if(cardFound){
                    deck[cardFound.id].resumeNumber--;
                }
            })
        }
    })
}

function translateValue(elem){
    let result = "";
    switch(elem){
        case "A": result = "1";break;
        case "K": result = "10";break;
        case "Q": result = "10";break;
        case "J": result = "10";break;
        case "T": result = "10";break;
        default: result = elem;
    }
    return result;
}

function calcul(){
    let superior = deck.filter(e => translateValue(e.value) >= bustThreshold && e.resumeNumber > 0);
    let inferior = deck.filter(e => translateValue(e.value) < bustThreshold && e.resumeNumber > 0);
    let total = 0;
    let countI = 0;
    let countS = 0;

    superior.forEach(e => {
        countS += parseInt(e.resumeNumber);
        total += parseInt(e.resumeNumber);
    });

    inferior.forEach(e => {
        countI += parseInt(e.resumeNumber);
        total += parseInt(e.resumeNumber);
    });

    return Math.round((countI/total)*100);
}

// Construction du deck
constructDeck();

// On retient les cartes qui ont été tirées
drawPhase();
let result = calcul();

console.log(`${result}%`);
