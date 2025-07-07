/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const w = parseInt(readline());
const h = parseInt(readline());
const array = [];

// Enregistre toutes les lignes et colonnes de la grille
function save_grid(){
    for (let i = 0; i < h; i++) {
        const line = readline();
        array.push(line.split(""));
    }
}

function checkIfPosIsGood(posX, posY){
    return posX >= 0 && posX < h && posY >= 0 && posY < w ? true : false;
}

// Compte le nombre de mines à proximité de la position, et renvoi la valeur à remplacer si besoin
function checkMines(posX, posY){
    if(array[posX][posY] != "x"){
        let count = 0;
        let result = 0;

        for (let xqsd = -1; xqsd < 2; xqsd++){
            for(let yaze = -1; yaze < 2; yaze++){
                let Xaxe = posX + xqsd;
                let Yaxe = posY + yaze;
                if(checkIfPosIsGood(Xaxe, Yaxe)){
                    if(array[Xaxe][Yaxe] == "x"){
                        count++;
                    }
                }
            }
        }
        count == 0 ? result = "." : null;
        count > 0 ? result = count : null;

        return result;
    } else {
        return "x";
    }
}

// Lis les axes x et y de la grille
function read_grid(){
    // Display les axes x
    for(let x = 0; x < array.length; x++){
        // Display les axes y
        for(let y = 0; y < array[x].length; y++){
            // On réattribut "." ou "number" à la place s'il y a une mine à proximité
            array[x][y] = checkMines(x, y);
        }
    }
}

function lecture_grid(){
    array.forEach(e => {
        console.log(e.join(""));
    })
}

function clean_x_from_grid(){
    // Display les axes x
    for(let x = 0; x < array.length; x++){
        // Display les axes y
        for(let y = 0; y < array[x].length; y++){
            if(array[x][y] == "x"){
                array[x][y] = ".";
            }
        }
    }
}

function main(){
    save_grid();
    read_grid();
    clean_x_from_grid();
    lecture_grid();
}

main();