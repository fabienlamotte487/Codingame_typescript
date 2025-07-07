/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const T = readline();
const rules = [
    {
        id:0,
        r:"sp",
        v:" "
    },
    {
        id:1,
        r:"bS",
        v:"\\"
    },
    {
        id:2,
        r:"sQ",
        v:"'"
    },
    {
        id:3,
        r:"nl",
        v:"\n"
    }
]
const s = T.split(" ");

let result = "";

// Fonction qui renvoi la ligne extraite
function format(i, v){
    let line = "";

    if(i){
        for(let x = 0; x < i; x++){
            line += v;
        }
    } else {
        line += v;
    }

    return line;
}

// Fonction qui isole la valeur à répéter et le nombre de répétition
function reflexion(n,r){
    let i,v; // Initialisation des variables

    // S'il y a autre chose que des chiffres, les chiffres deviennent les itérations
    if(r){
        // S'il y a des chiffres
        if(n && n.length > 0){
            i = n[0];
        } 
        let research = rules.filter(e => e.r == r.join(''));
        if(research.length > 0){
            v = research[0].v
        } else {
            v = r.join("")
        }
    } else { // Si il n'y a que des chiffres, alors on sépare le dernier chiffre du reste
        if(n && n.length > 0){
            let a = n[0].split("")
            i = a.slice(0,-1).join("");
            v = a.slice(-1)[0];
        }
    }
    
    return {iterations:i, value:v};
}

s.forEach(e => {
    let numberRegex = new RegExp(/[0-9]+/g);
    let nonNumberRegex = new RegExp(/[^0-9]/g);
    let n = e.match(numberRegex); // Tableau des chiffres
    let r = e.match(nonNumberRegex); // Tableau des autres caractères
    
    // Détermine le nombre d'itération et isole l'élément à répéter
    const {iterations, value} = reflexion(n,r); 

    // Format la ligne courrante
    result += format(iterations, value);

});

console.log(result);

