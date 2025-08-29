// 1: Exporting nested objects and function from Module using exports Object.

// usign exports object
const nestedObject = {
  pair1: "val1",
  pair2: "val2",
  second: {
    a: 1,
    b: 2,
  },
};

const greeting = () => {
  return "Good morning !!!!";
};

exports.nestedObject = nestedObject;
exports.greeting = greeting;

export const nestedObject1 = {
  pair1: "val1",
  pair2: "val2",
  second: {
    a: 1,
    b: 2,
  },
};

const nestedObject3 = {
  pair1: "val1",
  pair2: "val2",
  second: {
    a: 1,
    b: 2,
  },
};
export default nestedObject3;

const nestedObject4 = {
  pair1: "val1",
  pair2: "val2",
  second: {
    a: 1,
    b: 2,
  },
};

export const {
  pair1,
  pair2,
  second: { a, b },
} = nestedObject4;

// Errors faced
// 1. Accidentally mixed CommonJS (exports) and ES Modules (export) syntax, which caused syntax errors.
// 2. Tried to use more than one default export, which is not allowed in ES Modules.
// 3. Faced issues with destructuring and exporting nested properties; sometimes the exports were undefined.
// 4. Had trouble importing the exports in other files due to mismatched module systems (CommonJS vs ES Modules).
