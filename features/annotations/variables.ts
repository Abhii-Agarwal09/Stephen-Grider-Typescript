let apples: number = 5;
// apples = 'hello' -> Error
let speed: string = 'fast';
let hasName: boolean = false;
let nothing: null = null;
let und: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let marks: number[] = [12, 23, 34];
let attendance: boolean[] = [false, true, true];

// Classes

class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  // All properties defined should be present
  x: 10,
  y: 20,
  // title: 'center' -> Error
};

// Function -> annotating the variable here
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const color = 'red';

let color2;
color2 = 'red';

const json = '{"x": "10", "y": "20"}';
const coordinates: { x: number; y: number } = JSON.parse(json); // For fizing any type, add annotation
console.log(coordinates); // { x: 10, y: 20 }

// Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
