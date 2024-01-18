let character: string = 'maria';
console.log(character);

const car = {
  id: -1,
  start: (id: number) => {
    console.log(`The car ${id} is running!`);
  },
};

console.log(car.start(0));
