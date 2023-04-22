// GET SECOND LAST BIGNUMBER FROM ARRAY LIKE, [8,3,2,7,5,8,3,4,6,6,7] ==> O/P 7

// USING SET METHOD

const input = [1, 7, 5, 6, 6, 2, 4, 7, 7, 7];
// const output1 = 6;

const func = (arr) => {
  const sortedArr = [...new Set(arr.sort((a, b) => a - b))];

  return sortedArr[sortedArr.length - 2];
};

console.log(func(input));

//------------------------------------------------------------------------------------------//

// WITHOUT USING SET METHOD

const input2 = [1, 7, 5, 6, 6, -2, 4, 7, 7, 7];
// const output1 = 6;

const func2 = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  // console.log(sortedArr);
  let bigNumber = sortedArr[sortedArr.length - 1];
  // console.log({ bigNumber });

  for (let i = sortedArr.length - 1; i >= 0; i--) {
    // console.log(sortedArr[i], bigNumber);
    if (bigNumber !== sortedArr[i]) {
      bigNumber = sortedArr[i];
      break;
    }
  }

  // console.log({ arr });
  return bigNumber;
};

console.log(func2(input2));
