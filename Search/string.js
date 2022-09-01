function stringSearch(str1, str2){
    var count = 0;
    for( let i = 0; i < str1.length; i++){
        for(let j = 0; j< str2.length; j++){
            console.log(str1[i+j] , str2[j])
            if(str2[j] !== str1[i+j]){
                console.log("break")
                break
            }

            if(j === str2.length - 1){
                count += 1;
            }
        }
    }
    console.log(count)
    return count;
}

const result = stringSearch('ahmed', 'me');
console.log('found match : ', result)

// str2[j] !== str1[i+j]
//      0           0+0
//      1           0+1