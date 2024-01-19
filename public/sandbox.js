"use strict";
let lexicon = {
    name: 'lexicon',
    address: 'Kovägen 22',
    zip: 55655,
    city: 'Stockholm',
    students: [],
    teachers: [],
};
let lexiconHTML = {
    name: 'html',
    students: [],
    teachers: {},
};
let lexiconCSS = {
    name: 'css',
    students: [],
    teachers: {},
};
let lexiconJS = {
    name: 'javascript',
    students: [],
    teachers: {},
};
let niklas = {
    name: 'Niklas',
    subjects: [],
};
let thomas = {
    name: 'Thomas',
    subjects: [],
};
let johan = {
    name: 'Johan',
    age: 26,
    gender: 'Male',
    class: 'React_2023',
    subjects: [],
};
let erik = {
    name: 'Erik',
    age: 22,
    gender: 'Male',
    class: 'React_2023',
    subjects: [],
};
let jonas = {
    name: 'Jonas',
    age: 31,
    gender: 'Male',
    class: 'React_2023',
    subjects: [],
};
let emma = {
    name: 'Emma',
    age: 19,
    gender: 'Male',
    class: 'React_2023',
    subjects: [],
};
let linnea = {
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
const addSubjects = (person, subject) => {
    if (person === null || subject === null) {
        return console.log('ERROR: You need to provide the correct information.');
    }
    person.subjects.push(subject);
    if (!person.subjects.includes(subject)) {
        return console.log(`${person}'s failed to be added to the subjects lists.`);
    }
    else {
        console.log(`${subject} has been added to ${person.name}'s subjects.`);
    }
};
const addTeacher = (person) => {
    if (!person || typeof person !== 'string') {
        return console.log('ERROR: You need to provide the correct information. (Person) should be a string.');
    }
    lexicon.teachers.push(person);
    console.log(`Teacher ${person} has been added to the teachers list.`);
};
const addStudent = (person) => {
    if (!person || typeof person !== 'string') {
        return console.log('ERROR: You need to provide the correct information. (Person) should be a string.');
    }
    lexicon.students.push(person);
    console.log(`Student ${person} has been added to the students list.`);
};
addStudent('Johan');
addTeacher('Niklas');
addSubjects(niklas, 'html');
console.log(lexicon.students);
console.log(lexicon.teachers);
//# sourceMappingURL=sandbox.js.map