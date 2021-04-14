const testValues = [60, 100, 120];
const testWeights = [10, 20, 30];
const testCapacity = 50;

const steal = (values, weights, capacity, index) => {
  if (capacity < 0) {
    return -(values[index - 1]);
  }

  if (!values[index] || !weights[index]) {
    return 0;
  }

  const currentItemValue = values[index];
  const currentItemWeight = weights[index];

  let resultA = steal(values, weights, capacity - currentItemWeight, index + 1) + currentItemValue;
  let resultB = steal(values, weights, capacity, index + 1);


  if (resultA > resultB) {
    return resultA
  } else {
    return resultB
  }
}


console.log(steal(testValues, testWeights, testCapacity, 0));