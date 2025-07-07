/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var array = []
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
for (let i = 0; i < h; i++) {
    var inputs = readline().split(' ');
    for (let j = 0; j < w; j++) {
        const pixel = parseInt(inputs[j]);
        const bit = dec2bin(pixel).split("").slice(-1)[0]
        array.push(bit)
    }
}
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

let string = "";
let arrayBinary = [];
array.map(e => {
    string += e
    if(string.length === 8){
        arrayBinary.push(toAscii(string));
        string = "";
    }
})

console.log(arrayBinary.join(""))

function toAscii(input) {
    var result = "";
    var arr = input.match(/.{1,8}/g);
    for (var i = 0; i < arr.length; i++) {
        result += String.fromCharCode(parseInt(arr[i], 2).toString(10));
    }
    return result;
}