// FIND MATCHED OBJECT KEY AND VALUE FROM TWO OBJECTS

const input1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const input2 = { f: 1, b: 2, e: 5, h: 7 };

// const output = { b: 2, e: 5 };

const func = (obj1, obj2) => {
  let obj = {};
  for (let i in obj1) {
    if (obj1[i] === obj2[i]) {
      obj[i] = obj1[i];
    }
  }
  return obj;
};

console.log(func(input1, input2));
