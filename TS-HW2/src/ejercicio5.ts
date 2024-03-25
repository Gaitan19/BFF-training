interface Calculator {
  sum(x: number, y: number): number;
}

const calculateSum: Calculator = {
  sum(x: number, y: number): number {
    return x + y;
  },
};

const result1 = calculateSum.sum(5, 3);
console.log("Resultado de la suma:", result1);

const result2 = calculateSum.sum(10, 5);
console.log("Resultado de la suma:", result2);

const handleOperation = (calc: Calculator, a: number, b: number): void => {
  const result = calc.sum(a, b);
  console.log(`El resultado de la operación es: ${result}`);
};

handleOperation(calculateSum, 10, 20);
