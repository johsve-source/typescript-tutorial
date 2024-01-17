"use strict";
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
/*
This is how you make an array of strings, there is a difference in vanilla js when you just do it like
let ninjas = [];
*/
let ninjas = [];
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
let uid;
uid = '123';
uid = 123;
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
// Möjligt att ändra till en array men inte något annat.
ninjaOne = [];
let ninjaTwo;
let age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
let mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
let ninja;
ninja = {
    name: 'yoshi',
    age: 25,
};
console.log(ninja);
ninja = {
    name: 25,
    age: 'yoshi',
};
console.log(ninja);
