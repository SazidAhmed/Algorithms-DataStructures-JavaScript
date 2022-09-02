function numberCompare(num1, num2){
    return num1 - num2;
}

function compareByLen(str1, str2){
    return str2.length - str1.length;
}

const arr1 = [6,4,16,12]
const arr2 = ['apple', 'dog', 'car', 'ball']

const result1 = arr1.sort(numberCompare)
console.log(result1)

const result2 = arr2.sort(compareByLen)
console.log(result2)