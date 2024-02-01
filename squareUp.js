function squareUp(n) {
    let array = [];
  
    for (let i = 1; i <= n; i++)
      for (let j = n; j >= 1; j--)
        array.push(j <= i ? j : 0);
  
    return array;
}

console.log(squareUp(4));