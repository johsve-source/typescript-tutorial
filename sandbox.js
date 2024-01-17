/* interface Ninja {
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

console.log(ninja1); */
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
/*
This is how you make an array of strings, there is a difference in vanilla js when you just do it like
let ninjas = [];
*/
var ninjas = [];
ninjas[1] = 'John';
console.log(ninjas);
ninjas.push('Mike');
console.log(ninjas);
ninjas.push(1);
console.log(ninjas);
ninjas.push(true);
console.log(ninjas);
