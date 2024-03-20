// const square = (num: number): number => num * num;

// const squaredValue = square(5);
// console.log(squaredValue); // Output: 25


const users : object[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  console.log(sortedUsers); // Output: [{ name: 'Bob', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Charlie', age: 35 }]
  