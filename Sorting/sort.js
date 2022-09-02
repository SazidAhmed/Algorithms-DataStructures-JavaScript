function numberCompare(num1, num2){
    return num1 - num2;
}

const arr = [6,4,16,12]
const result = arr.sort(numberCompare)
console.log(result)