
let a = 5, b = 5;
let c = 10, d = 5;
let e = 20, f = 20;
let g = 15, h = 10;
let i = 30, j = 30;

console.log(a == b);
console.log(a === b);

console.log(c == d);
console.log(c === d);

console.log(e == f);
console.log(e === f);

console.log(g == h);
console.log(g === h);

console.log(i == j);
console.log(i === j);

document.getElementById("result").innerHTML =
    "5 == 5: " + (a == b) + "<br>" +
    "5 === 5: " + (a === b) + "<br>" +
    "10 == 5: " + (c == d) + "<br>" +
    "10 === 5: " + (c === d) + "<br>" +
    "20 == 20: " + (e == f) + "<br>" +
    "20 === 20: " + (e === f) + "<br>" +
    "15 == 10: " + (g == h) + "<br>" +
    "15 === 10: " + (g === h) + "<br>" +
    "30 == 30: " + (i == j) + "<br>" +
    "30 === 30: " + (i === j);