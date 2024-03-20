// 'Any' example
let undefinedValue: any = "Could be any type";
undefinedValue = 100; // Changing type to number

// 'Void' function example
function printMessage(message: string): void {
  console.log(message);
}

// 'Undefined' example
let undefinedVariable: undefined = undefined;

// Function that may return 'void' or 'string'
function getGreeting(name?: string): string | void {
  if (name) {
    return `Hello, ${name}!`;
  }
}


printMessage(getGreeting("ana") as string)