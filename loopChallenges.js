console.log("Print odds 1-20");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

console.log("\nDecreasing Multiples of 3")
for (var i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

console.log("\nPrint the sequence")
for (var i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}

console.log("\nSigma")
var sum = 0;
for (var i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

console.log("\nFactorial")
var product=1;
for (var i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);