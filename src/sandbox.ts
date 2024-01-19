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

let student1: LexiconStudent = {
  name: 'Johan',
  age: 26,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let student2: LexiconStudent = {
  name: 'Erik',
  age: 22,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let student3: LexiconStudent = {
  name: 'Jonas',
  age: 31,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let student4: LexiconStudent = {
  name: 'Emma',
  age: 19,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

let student5: LexiconStudent = {
  name: 'Linnea',
  age: 28,
  gender: 'Male',
  class: 'React_2023',
  subjects: ['HTML', 'CSS', 'Javascript', 'Typescript', 'React'],
};

console.log(student1);
console.log(student2);
console.log(student3);
