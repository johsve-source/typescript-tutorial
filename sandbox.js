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
/*
Union type "(number | string)[]" används bara när den är framför en array men om de inte är en array så behövs inte union type, exempel neranför.
*/
var uid;
uid = '123';
uid = 123;
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// Möjligt att ändra till en array men inte något annat.
ninjaOne = [];
var ninjaTwo;
