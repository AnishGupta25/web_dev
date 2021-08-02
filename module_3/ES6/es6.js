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