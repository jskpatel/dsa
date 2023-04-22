

// FIND INDEX FROM ARRAY THROUGH INPUT VALUE

const arr = [9, 5, 8, 0, 2, 4, 6, 5];
const value = 5;

const findIndexFromArray = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return false;
};
console.log(findIndexFromArray(arr, value));
