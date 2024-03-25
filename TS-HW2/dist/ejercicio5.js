"use strict";
const calculateSum = {
    sum(x, y) {
        return x + y;
    },
};
const result1 = calculateSum.sum(5, 3);
console.log("Resultado de la suma:", result1);
const result2 = calculateSum.sum(10, 5);
console.log("Resultado de la suma:", result2);
const handleOperation = (calc, a, b) => {
    const result = calc.sum(a, b);
    console.log(`El resultado de la operación es: ${result}`);
};
handleOperation(calculateSum, 10, 20);
