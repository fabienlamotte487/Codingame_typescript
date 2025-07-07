let r1 = parseInt(readline());
let r2 = parseInt(readline());

function fetch(number){
    let count = 0;
    number.toString().split("").forEach(e => {
        count += parseInt(e);
    });
    return number + count;
}   

while(true){
    if(r2 === r1){
        console.log(r2);
        break;
    } else if(r1 > r2){
        r2 = fetch(r2)
    } else {
        r1 = fetch(r1)
    }
}