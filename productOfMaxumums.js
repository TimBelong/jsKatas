function maxProduct(numbers, size){
    let result = 1;

    while (size-- > 0 && numbers.length > 0) {
        let max = Math.max(...numbers);
        result *= max;
        numbers.splice(numbers.indexOf(max), 1);
    }

    return result
}

console.log(maxProduct([4,3,5], 2));