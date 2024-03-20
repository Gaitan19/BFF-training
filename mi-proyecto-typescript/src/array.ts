// Array example
let numberList: number[] = [1, 2, 3, 4, 5];
let nameList: Array<string> = ["Ana", "Luis", "Miguel"];

// Tuple example
let user: [string, number, boolean] = ["Ana", 25, true];

// Functions with arrays and tuples
function addUser(
  user: [string, number, boolean],
  users: [string, number, boolean][]
) {
  users.push(user);
  return users;
}


const userFinal =  addUser(user,[]);

console.log('userFinal :>> ', userFinal);