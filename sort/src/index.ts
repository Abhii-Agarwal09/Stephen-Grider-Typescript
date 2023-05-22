class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) { // type guard, restores all properties if we are clear about what are we working with -> used if we are accepting different values (number[] && string) in the sort method
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        if (typeof this.collection === 'string') { // typeof for primitive values
          // logic for sorting string
        }
      }
    }
  }
}

const sorter = new Sorter([-1, 10, 5, 0]);
sorter.sort();
console.log(sorter.collection);
