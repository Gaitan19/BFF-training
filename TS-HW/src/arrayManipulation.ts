const arr1: number[] = [1,2,3,4,5,6,7,8,9,10]
const arr2: number[] = [10,10,10]


const sumArrElements = (arr:number[]):number => arr.reduce((accumulator,currentValue)=> accumulator + currentValue,0) 

console.log(`arr1: [${arr1}] | its sum:`,sumArrElements(arr1));
console.log(`arr2: [${arr2}] | its sum:`,sumArrElements(arr2));
