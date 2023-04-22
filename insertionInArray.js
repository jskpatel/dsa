

// INSERTION IN ARRAY |-| ADD NEW VALUE IN ARRAY

const arr = [9, 5, 8, 0, 2, 4, 6, 5];
const target = 3;

function addEl(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
    if (i >= target) {
      arr[i + 1] = arr[i];
    }
  }
  arr[target] = 101;
  return arr;
}

console.log(addEl(arr, target));