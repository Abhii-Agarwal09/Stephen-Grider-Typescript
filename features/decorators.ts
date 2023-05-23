@classConstructor
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formatterColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Boat sank')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    // throw new Error();
    speed === 'fast'
      ? console.log('boat is fast')
      : console.log('boat is slow');
  }
}

function classConstructor(constructor: typeof Boat) { // can also give type of Function (both same)
  console.log(constructor);
}

function testDecorator(target: any, key: string): void {
  // console.log(target.color); // error -> not accessible (only prototype)
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function logError(errMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errMsg);
      }
    };
  };
}
