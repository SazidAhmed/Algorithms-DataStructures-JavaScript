// no need to be a sorted array
// linear time  O(n)

function linear(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == val) return i;
    }
    return -1;
}

var result = linear([1, 4, 2, 5], 4)

console.log(result)