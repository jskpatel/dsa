// ROTATE 2 ARRAY NUMBERS USING FUNCTION

const arr = [2, 7, 11, 4, -2]; // output: [11, 4, -2, 2, 7]
// const opt = [11, 4, -2, 2, 7]; // output: [-2, 2, 7, 11, 4]

const output = (arr) => {
  for (let i = 0; i < 2; i++) {
    console.log(i);
    let temp = arr[0];

    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
  }
  console.log(arr);
  // return arr;
};

console.log(output(arr));
