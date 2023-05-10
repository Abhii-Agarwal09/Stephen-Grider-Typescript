const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40]; // [string, boolean, number] -> defines the order
const slice: Drink = ['orange', false, 60];
// pepsi[0] = 40; // Will now throw an error
