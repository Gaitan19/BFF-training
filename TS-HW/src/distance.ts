const origen:[number,number] = [0,0]

const punto: [number,number] = [5,10]


// formula:
// Distancia = √(x^2 + y^2)

const handleDistace = (coordenadas:[number,number]):number => Math.sqrt(Math.pow(coordenadas[0],2) + Math.pow(coordenadas[1],2))


console.log(`coordenadas:(${punto}), distancia al origen (0,0): `,handleDistace(punto).toFixed(2))