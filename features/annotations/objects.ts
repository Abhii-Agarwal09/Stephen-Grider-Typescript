const profile = {
  name: 'Alex',
  age: 21,
  coords: {
    lat: 56,
    lng: 32,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// For destructure we have to specify the structure also while adding annotation
const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
