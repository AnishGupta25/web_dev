let a = [1, 2, 3, 4, 5];

function double(x) {
  return 2 * x;
}

function Even(x) {
    return x % 2 == 0;
}

let ansArr = a.map(double);
let ans = a.filter(Even);

console.log(a);
console.log(ansArr);
console.log(ans);

function myMap(a , f){
    let arr = [];
    for(i = 0; i < a.length; i++){
        arr.push(f(a[i]));
    }
    return arr;
}

function myFilter(a , f){
    let arr = [];
    for(i = 0; i < a.length; i++){
        if(f(a[i])){
            arr.push(a[i]);
        }
    }
    return arr;
}

console.log(myMap(a , double));
console.log(myFilter(a , Even));