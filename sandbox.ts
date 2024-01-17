interface Ninja {
  name: string;
  belt: string;
  age: number;
}

const createNinja = (name: string, belt: string, age: number): Ninja => ({
  name,
  belt,
  age,
});

let ninja1 = createNinja('Ryu', 'Black', 30);

console.log(ninja1);
