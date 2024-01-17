var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
console.log(names[3]);
var numbers = [10, 20, 30, 40];
numbers.push(50);
console.log(numbers);
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('barbie');
console.log(mixed);
mixed.push(20);
console.log(mixed);
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30,
};
ninja.age = 40;
ninja.name = 'ryu';
ninja.belt = 'blue';
console.log("".concat(ninja.name, " is ").concat(ninja.age, " and has a ").concat(ninja.belt, " belt."));
