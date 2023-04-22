const arr1 = [1, 1, 2, 2];
const arr2 = [3, 3, 4, 4];
const arr3 = [];
const arr4 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
  arr3[arr1.length + i] = arr2[i];
}

console.log(arr3);
output: [1, 1, 2, 2, 3, 3, 4, 4];

//-----------[2]----------//

arr4 = [...arr1, ...arr2];
console.log(arr4);
output: [1, 1, 2, 2, 3, 3, 4, 4];
