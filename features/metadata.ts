import 'reflect-metadata'; // adds single variable to global scope - reflect

@printMetadata
class Plane {
  color: string = 'red';

  @markFunction('Hi there')
  fly(): void {
    console.log('vrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string): void {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note-color', 'Value is red', plane, 'color'); // adding metadata to a specific property
// const noteColor = Reflect.getMetadata('note-color', plane, 'color');
// console.log(noteColor);

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);
