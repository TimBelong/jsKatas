// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with the lowest index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// function removeSmallest(numbers) {

    let newArray = numbers;
    // Finding minimal value in the array
    let minNumber = Math.min(...newArray);

    // Finding index of the minumal value
    let minIndex = newArray.indexOf(Math.min(...newArray));

    // Removing minimal value from the array
    if (minIndex > -1) {
        newArray.splice(minIndex, 1);
    }

    return newArray;
}


console.log(removeSmallest([2, 2, 1, 2, 1]));