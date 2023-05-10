const carMakers: string[] = ['ford', 'tata', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camerro']];

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(21);

// Help with functions
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Multiple types in arrays
const importantDates: (string | Date)[] = [new Date(), '23-3-2023'];
