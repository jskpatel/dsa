// FIND INDEX FROM ARRAY THROUGH INPUT VALUE

// 1] IT WILL RETURN FIRST INDEX OF TARGET VALUE AND THEN RETURN
const arr = [9, 5, 8, 0, 2, 4, 6, 5];
const value = 5;

const findIndexFromArray = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return false;
};
console.log(findIndexFromArray(arr, value));

// 2] IT WILL RETURN ALL TARGETED INDEXES FROM ARRAY
const arr2 = [9, 5, 8, 0, 8, 2, 9, 4, 9, 6, 5];
const value2 = 9;

const findIndexFromArray2 = (arr2, value2) => {
  let index = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === value2) {
      index.push(i);
    }
  }
  return index;
};
console.log(findIndexFromArray2(arr2, value2));
