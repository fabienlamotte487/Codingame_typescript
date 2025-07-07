const arrayLaw = [
    {id:1, value:30.1},
    {id:2, value:17.6},
    {id:3, value:12.5},
    {id:4, value:9.7},
    {id:5, value:7.9},
    {id:6, value:6.7},
    {id:7, value:5.8},
    {id:8, value:5.1},
    {id:9, value:4.6},
]

const arrayResult = [
    {id:1, count:0, value:0},
    {id:2, count:0, value:0},
    {id:3, count:0, value:0},
    {id:4, count:0, value:0},
    {id:5, count:0, value:0},
    {id:6, count:0, value:0},
    {id:7, count:0, value:0},
    {id:8, count:0, value:0},
    {id:9, count:0, value:0},
]

function calcul_pourcentage(){
    arrayResult.forEach((e, i) => {
        arrayResult[i].value = (e.count / transactions_number) *100
    })
}

function estimate() {
    let result = false
    arrayResult.forEach((e, i) => {
        let law = arrayLaw[i]

        if(result == false){
            if(e.value < law.value-10){
                result = true
            }
        }
        if(result == false){
            if(e.value > law.value+10){
                result = true
            }
        }
    })

    return result
}

const regex = /[1-9]/;

const N = parseInt(readline());
let transactions_number = N;
for (let i = 0; i < N; i++) {
    const transaction = readline();
    let split = transaction.split("")
    let follow = true
    split.forEach(e => {
        if(regex.test(e) && follow){
            arrayResult[e-1].count++
            follow = false
        }
    })
}

calcul_pourcentage();
console.log(estimate());
