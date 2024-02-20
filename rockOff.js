function solve(a, b) {
    let countForA = 0;
    let countForB = 0;

    a.forEach((current, i) => current > b[i] ? countForA++ : current < b[i] ? countForB++ : 0)
    
    return `${countForA}, ${countForB}: ${countForA === countForB ? 'that looks like a "draw"! Rock on!' : countForA > countForB ? 'Alice made "Kurt" proud!' : 'Bob made "Jeff" proud!'}`;
}

console.log(solve([47, 7, 2], [47, 7, 2]));