/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let tab = [];
for (let i = 0; i < 3; i++) {
    const line = readline();
    tab.push(line.split(""));
}
let finished = false;

function readLine(){
    tab.forEach((e,i) => {
        let countO = tab[i].filter(e => e == "O").length;
        let countDot = tab[i].filter(e => e == ".").length;
        if(countO == 2 && countDot == 1){
            tab[i] = ["O","O","O"];
            finished = true
        }
    })
}

function readColumn(){
    for(let x = 0; x < tab.length; x++){
        let line = [tab[0][x], tab[1][x], tab[2][x]];
        let countO = line.filter(e => e == "O").length;
        let countDot = line.filter(e => e == ".").length;
        if(countO == 2 && countDot == 1){
            tab[0][x] = "O";
            tab[1][x] = "O";
            tab[2][x] = "O";
            finished = true
        }
    }
}

function readDiagonal(){
    let line1 = [tab[0][0], tab[1][1], tab[2][2]];
    let line2 = [tab[0][2], tab[1][1], tab[2][0]];
    let countO1 = line1.filter(e => e == "O").length;
    let countO2 = line2.filter(e => e == "O").length;
    let countDot1 = line1.filter(e => e == ".").length;
    let countDot2 = line2.filter(e => e == ".").length;

    if(!finished && countO1 == 2 && countDot1 == 1){
        tab[0][0] = "O";
        tab[1][1] = "O";
        tab[2][2] = "O";
        finished = true;
    }
    if(!finished && countO2 == 2 && countDot2 == 1){
        tab[0][2] = "O";
        tab[1][1] = "O";
        tab[2][0] = "O";
        finished = true;
    }
}

function fetchResult(){
    tab.forEach(e => {
        console.log(e.join(""))
    })
}

if(!finished){
    readLine();
}
if(!finished){
    readColumn();
}
if(!finished){
    readDiagonal();
}

if(!finished){
    console.log(false);
} else {
    fetchResult();
}



// Write an answer using console.log()
// To debug: console.error('Debug messages...');

