"use strict";
const origen = [0, 0];
const punto = [5, 10];
// formula:
// Distancia = √(x^2 + y^2)
const handleDistace = (coordenadas) => Math.sqrt(Math.pow(coordenadas[0], 2) + Math.pow(coordenadas[1], 2));
console.log(`coordenadas:(${punto}), distancia al origen (0,0): `, handleDistace(punto).toFixed(2));
