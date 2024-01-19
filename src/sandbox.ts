let lexicon = {
  name: 'lexicon',
  address: 'Kovägen 22',
  zip: 55655,
  city: 'Stockholm',
  students: ['Johan', 'Erik', 'Jonas'],
  teachers: ['Niklas', 'Thomas', 'Maja'],
};

type LexiconStudent = {
  name: string;
  age: number;
  gender: string;
  class: string;
  subjects: string[];
};

type LexiconMath = {
  name: string;
  students: string[];
  teachers: string[];
};

type LexiconBiology = {
  name: string;
  students: string[];
  teachers: string[];
};

type LexiconEnglish = {
  name: string;
  students: string[];
  teachers: string[];
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

console.log(student1);
console.log(student2);
console.log(student3);
