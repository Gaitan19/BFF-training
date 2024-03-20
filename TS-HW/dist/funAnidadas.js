"use strict";
const handleMultiplicator = (num) => {
    return (valor) => num * valor;
};
const handleMultiplicate = handleMultiplicator(2);
console.log(handleMultiplicate(8));
