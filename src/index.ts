// @ts-check

interface Learner {
  // Add an optional id property:
  id?: string;
  name: {
    first: string;
    last: string;
    // Make last optional using "last?"
  };
  course: string;
  grades: number[];
}

const john: Learner = {
  id: "1208365",
  name: {
      first: "John",
      last: "Doe",
  },
  course: "Introduction to TypeScript",
  grades: [96, 88, 100, 94]
};

function logLearner(l: Learner) {
  console.log(
    `Learner ${l.name.first} ${l.name.last} is currently enrolled in ${l.course}.`
  );
}

logLearner(john);
