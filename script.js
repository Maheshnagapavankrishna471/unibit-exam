const array = [1, 3, 2, 2, -4, -6, -2, 8];
const targetValue = 4;

function findTwoSum(arr, target) {
    let result = [];
    let numSet = new Set();
  
    for (let num of arr) {
      let complement = target - num;
      if (numSet.has(complement)) {
        result.push([num, complement]);
      }
      numSet.add(num);
    }
  
    return result;
  }
  

  const twoSumPairs = findTwoSum(array, targetValue);
  console.log(twoSumPairs);
  