// SORTING ARRAY WITHOUT INBUILT ARRAY METHOD

const data = [12, 10, 51, 42];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    console.warn(data);
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);

output: [10, 12, 42, 51];
