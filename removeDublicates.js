function withoutRepeat(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++){
        let count = 0;
        for(let j = 0; j < array.length; j++){
            if (array[i] === array[j]){
                count ++;
            }
        }
        if(count === 1)
            newArray.push(array[i]);
    }
    return newArray;
}

console.log(withoutRepeat([1,1,2,3,4,4,5,6,6,7,7,8,9]));