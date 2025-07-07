const n = parseInt(readline());
let a = [];
let r = "consistent";

for (let i = 0; i < n; i++) {
    const row = readline();
    let splitted = row.split(" > ");
    let f = splitted[0];
    let s = splitted[1];

    if(a.length == 0){
        a.push(s);
        a.push(f);
    } else {
        if(a.includes(f) && !a.includes(s)){
            a.splice(a.indexOf(f), 0, s);
        }
        else if(!a.includes(f) && a.includes(s)){
            a.splice(a.indexOf(s)+1, 0, f);
        }
        else if(a.includes(f) && a.includes(s)){
            if(a.indexOf(f) < a.indexOf(s)){
                r = "contradiction"
            }
        }
    }
}

console.log(r);