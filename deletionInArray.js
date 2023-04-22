

// DELETION IN ARRAY |-| REMOVE VALUE WITH INDEX FROM ARRAY

const arr = [9, 5, 8, 0, 2, 4, 6, 5];
const target = 4;

const deletionArray = (arr, target) => {
  for (let i = target; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
};

console.log(deletionArray(arr, target));
