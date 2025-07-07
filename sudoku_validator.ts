/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let tab = [];
let correct = true;
for (let i = 0; i < 9; i++) {
    var inputs = readline().split(' ');
    tab.push(inputs);
}

function check(row){
    for(let x = 1; x < 10; x++){
        if(row.filter(elem => elem == x).length != 1){
            correct = false;
        }
    }
}

function readLine(){
    tab.forEach(e => check(e));
}

function readColumn(){
    let line = [];
    for(let x = 0; x < 9; x++){
        let row = [];
        tab.forEach(e => {
            row.push(e[x]);
        })
        line.push(row);
    }
    line.forEach(e => check(e));
}

function readBox(){
    let box = [];
    for(let y = 0; y < 9; y+=3){
        for(let x = 0; x < 9; x+=3){
            let numbers = [];
            for(let l = 0; l < 3; l++){
                numbers.push(tab[y][x+l]);
                numbers.push(tab[y+1][x+l]);
                numbers.push(tab[y+2][x+l]);
            }
            box.push(numbers);
        }
    }
    box.forEach(e => check(e));
}

if(correct){
    readLine();
}

if(correct){
    readColumn();
}

if(correct){
    readBox();
}

correct ? console.log(true) : console.log(false);