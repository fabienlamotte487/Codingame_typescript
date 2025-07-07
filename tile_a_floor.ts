/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
let array = [];
for (let i = 0; i < N; i++) {
    const ROW = readline();
    array.push(ROW.split(""));
}

let rules = [
    {from:"^", to:"v"},
    {from:"A", to:"V"},
    {from:"w", to:"m"},
    {from:"W", to:"M"},
    {from:"u", to:"n"},
    {from:"v", to:"^"},
    {from:"V", to:"A"},
    {from:"m", to:"w"},
    {from:"M", to:"W"},
    {from:"n", to:"u"}
]

let rulesLine = [
    {from:"(", to:")"},
    {from:")", to:"("},
    {from:"{", to:"}"},
    {from:"}", to:"{"},
    {from:"[", to:"]"},
    {from:"]", to:"["},
    {from:"<", to:">"},
    {from:">", to:"<"},
]

let commonRules = [
    {from:"\\", to:"/"},
    {from:"/", to:"\\"}
]

function construct_form(){

    function verifRules(line, rules){
        line.forEach((elem, i) => {
            let isRuled = rules.filter(e => e.from == elem);
            if(isRuled.length > 0){
                line[i] = isRuled[0].to;
            }

            let isCommonRuled = commonRules.filter(e => e.from == elem);
            if(isCommonRuled.length > 0){
                line[i] = isCommonRuled[0].to;
            }
        })
    }

    // Clonage miroir ligne
    array.forEach((e,i) => {
        let reverseLine = e.filter((elem,index) => index != e.length-1).reverse();

        verifRules(reverseLine, rulesLine);

        array[i] = [...e, ...reverseLine];
    });

    // Clonage miroir de la colonne
    let reverseColumn = [];
    array.forEach((e,i) => {
        if(i != array.length - 1){
            let alterArray = [...e];
            verifRules(alterArray, rules);
            reverseColumn.push(alterArray);
        }
    })

    array.push(...reverseColumn.reverse());
}

function construct_squelette(){
    let squelette = [];

    function firstAndLastLine () {
        let line = ["+"];
        for(let x = 0; x < array[0].length;x++){
            line.push("-");
        }
        line.push("+");
        squelette.push(line);
    }

    function innerLine(){
        array.forEach(e => {
            let newLine = ["|"];
            newLine.push(...e);
            newLine.push("|");
            squelette.push(newLine);
        })
    }

    firstAndLastLine();
    innerLine();
    firstAndLastLine();
    array = squelette;
}

function lecture(){
    array.forEach(e => {
        console.log(e.join(""))
    });
}

function main(){
    construct_form();
    construct_squelette();
    construct_form();
    lecture();
}

main();
