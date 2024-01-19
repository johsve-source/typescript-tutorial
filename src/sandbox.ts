let lexicon = {
  name: 'lexicon',
  students: [],
  teachers: [],
};

type LexiconStudent = {
  name: string;
  age: number;
  gender: string;
  class: string;
  subjects: string[];
};

const lexiconStudent: LexiconStudent = {
  name: 'undefined',
  age: -1,
  gender: 'undefined',
  class: 'undefined',
  subjects: [],
};
