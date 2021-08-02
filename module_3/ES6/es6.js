let a = [1, 2, 3, 4, 5];

function double(x) {
  return 2 * x;
}

function Even(x) {
    return x % 2 == 0;
}

let ansArr = a.map(double);
let ans = a.filter(Even);
let an = a.reduce(double);

console.log(an);
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


let b = [...a,...a]; // spread operator (...)
console.log(b);

let o1 = {a:1 , b:2};
let o2 = {c:3};

let o3 = {...o1,...o2,...o1,...o2};
console.log(o3);

//  de structuring

let address = {
    city : "Delhi",
    pin : 110035
}

let {city , pin } = address;

console.log(city);
console.log(pin);