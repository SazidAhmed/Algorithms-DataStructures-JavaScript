//Divide and conquer
// 1,2,3,4,5,6,7,8,9
// 

function binary(arr, val){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start+end) / 2);

    while(arr[middle] !== val && start <= end){
        console.log(start, middle, end)
        if( val < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start+end) / 2);
    }

    if(arr[middle] == val){
        console.log('found on array index : ',middle)
        return middle;
    }else{
        console.log('Not found')
        return -1;
    }
}

binary([1,2,3,4,5,6,7,8,9],10)

// 1,2,3,4,5,6,7,8,9
// s       m       e

// 1,2,3,4,5,6,7,8,9
//           s m   e

// 1,2,3,4,5,6,7,8, 9
//               sm e