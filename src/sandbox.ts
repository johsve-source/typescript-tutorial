let lexicon = {
  name: 'lexicon',
  address: 'Kovägen 22',
  zip: 55655,
  city: 'Stockholm',
  students: [] as string[],
  teachers: [] as string[],
};

type LexiconSubject = {
  name: string;
  students: string[];
  teachers: { [key: string]: string };
};

type LexiconTeacher = {
  name: string;
  subjects: string[];
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
  students: [],
  teachers: {},
};

let lexiconCSS: LexiconSubject = {
  name: 'css',
  students: [],
  teachers: {},
};

let lexiconJS: LexiconSubject = {
  name: 'javascript',
  students: [],
  teachers: {},
};

let niklas: LexiconTeacher = {
  name: 'Niklas',
  subjects: [],
};

let thomas: LexiconTeacher = {
  name: 'Thomas',
  subjects: [],
};

let johan: LexiconStudent = {
  name: 'Johan',
  age: 26,
  gender: 'Male',
  class: 'React_2023',
  subjects: [],
};

let erik: LexiconStudent = {
  name: 'Erik',
  age: 22,
  gender: 'Male',
  class: 'React_2023',
  subjects: [],
};

let jonas: LexiconStudent = {
  name: 'Jonas',
  age: 31,
  gender: 'Male',
  class: 'React_2023',
  subjects: [],
};

let emma: LexiconStudent = {
  name: 'Emma',
  age: 19,
  gender: 'Male',
  class: 'React_2023',
  subjects: [],
};

let linnea: LexiconStudent = {
  name: 'Linnea',
  age: 28,
  gender: 'Male',
  class: 'React_2023',
  subjects: [],
};

console.log(johan);
console.log(erik);
console.log(jonas);
console.log(emma);
console.log(linnea);

const enlistToSubject = (
  person: LexiconStudent | LexiconTeacher,
  subject: string
) => {
  if (person === null || subject === null) {
    return console.log('ERROR: You need to provide the correct information.');
  }
  person.subjects.push(subject);
  if (!person.subjects.includes(subject)) {
    return console.log(`${person}'s failed to be added to the subjects lists.`);
  } else {
    console.log(`${subject} has been added to ${person.name}'s subjects.`);
  }
};

const addTeacher = (person: string) => {
  if (!person || typeof person !== 'string') {
    return console.log(
      'ERROR: You need to provide the correct information. (Person) should be a string.'
    );
  }
  lexicon.teachers.push(person);
  console.log(`Teacher ${person} has been added to the teachers list.`);
};

const addStudent = (person: string) => {
  if (!person || typeof person !== 'string') {
    return console.log(
      'ERROR: You need to provide the correct information. (Person) should be a string.'
    );
  }
  lexicon.students.push(person);
  console.log(`Student ${person} has been added to the students list.`);
};

addStudent('Johan');
addTeacher('Niklas');
enlistToSubject(niklas, 'html');

console.log(lexicon.students);
console.log(lexicon.teachers);
