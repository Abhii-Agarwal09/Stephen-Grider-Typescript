class Vehicle {
  // drive(): void {
  //   console.log('driving');
  // }
  // color: string = 'black';

  // constructor(color: string) {
  //   this.color = color;
  // }

  // Another way for writing properties and constructors
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    // did not put public in front of color, because we don't want to create a new property color inside Car. color belongs to the class Vehicle
    super(color);
  }
  // Method overriding
  private drive(): void {
    console.log('Car is driving');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('orange');
// vehicle.drive();
// vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, 'yellow');
car.startDriving();
console.log(car.color);
// car.honk();
