const handleMultiplicator = (num: number): ((valor: number) => number) => {
  return (valor: number): number => num * valor;
};

const handleMultiplicate = handleMultiplicator(2);
console.log(handleMultiplicate(8));
