let lexicon = {
  name: 'lexicon',
  address: 'Kovägen 22',
  zip: 55655,
  city: 'Stockholm',
  students: ['Johan', 'Erik', 'Jonas', 'Emma', 'Linnea'],
  teachers: ['Niklas', 'Thomas', 'Maja'],
};

type LexiconSubject = {
  name: string;
  students: string[];
  teachers: { [key: string]: string };
};

type LexiconStudent = {
  name: string;
  age: number;
  gender: string;
  class: string;
  subjects: string[];
};

let lexiconHTML: LexiconSubject = {
  name: 'html',
  students: ['Johan', 'Erik', 'Jonas', 'Emma', 'Linnea'],
  teachers: {
    Niklas: 'HTML Teacher',
    Thomas: 'HTML Teacher',
    Maja: 'HTML Teacher',
  },
};

let lexiconCSS: LexiconSubject = {
  name: 'css',
  students: ['Johan', 'Erik', 'Jonas', 'Emma', 'Linnea'],
  teachers: {
    Niklas: 'HTML Teacher',
    Thomas: 'HTML Teacher',
    Maja: 'HTML Teacher',
  },
};

let lexiconJS: LexiconSubject = {
  name: 'javascript',
  students: ['Johan', 'Erik', 'Jonas', 'Emma', 'Linnea'],
  teachers: {
    Niklas: 'HTML Teacher',
    Thomas: 'HTML Teacher',
    Maja: 'HTML Teacher',
  },
};

let johan: LexiconStudent = {
  name: 'Johan',
  age: 26,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let erik: LexiconStudent = {
  name: 'Erik',
  age: 22,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let jonas: LexiconStudent = {
  name: 'Jonas',
  age: 31,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let emma: LexiconStudent = {
  name: 'Emma',
  age: 19,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let linnea: LexiconStudent = {
  name: 'Linnea',
  age: 28,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

console.log(johan);
console.log(erik);
console.log(jonas);
console.log(emma);
console.log(linnea);
