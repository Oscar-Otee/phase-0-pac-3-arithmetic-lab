function add(a, b) {
    return a + b;
}
console.log(add(9, 2));

function subtract(a, b) {
    return a - b;
}
console.log(subtract(9, 2));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(9, 2));

function divide(a, b) {
    return a / b;
}
console.log(divide(9, 2));

function increment(a = 0) {
    return a += 1;

}
console.log(increment(9));

function decrement(a) {
    return a -= 1;
}
console.log(decrement(9));


function makeInt(a) {
    return parseInt(a, 10);
}

console.log(makeInt("30"));
console.log(makeInt("0x2328"));
console.log(makeInt("sldkjflksjf"));


function preserveDecimal(a) {
    return parseFloat(a);
}
console.log(preserveDecimal("2.222"))
console.log(preserveDecimal("sldkjflksjf"))