function orArrays(arr1, arr2, defaultValue = 0) {
    const maxLength = Math.max(arr1.length, arr2.length);
    const resultArray = [];

    for (let i = 0; i < maxLength; i++) {
        const val1 = arr1[i] !== undefined ? arr1[i] : defaultValue;
        const val2 = arr2[i] !== undefined ? arr2[i] : defaultValue;
        resultArray.push(val1 | val2);
    }

    return resultArray;
}