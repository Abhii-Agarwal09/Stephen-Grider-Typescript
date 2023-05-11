interface Reportable {
  // name: string; // can be removed
  // year: number;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2020,
  broken: true,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`;
  },
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// Very long type annotation -> replace with interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink2);
