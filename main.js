const a = require('./util.js')

let A = [
    [9, 8],
    [6, 1]
];
let B = [
    [2, 7],
    [3, 4]
];

console.log(a.matrixProd(A, B));
console.log(a.sumOfMats(A, B));
console.log(a.sumOfRows(B));