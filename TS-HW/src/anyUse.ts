const anyType = (element:any):string => typeof element

const example1 = anyType("hola");

const example2 = anyType(3);

const example3 = anyType(true);

console.log('{example1,example2,example3} :>> ', {example1,example2,example3});