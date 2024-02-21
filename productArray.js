function productArray(numbers){
    let newArray = [];

    numbers.forEach(item => {
        newArray.push(numbers.reduce((acc, curr) => acc * curr)/item);
    })
    
    return newArray;
  }

  console.log(productArray([12,20]));