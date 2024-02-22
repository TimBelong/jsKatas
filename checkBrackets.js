function checkBrackets(str){
    let stack = [];

    const obj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for (let item of str){
        if(item === '(' || item === '{' || item === '['){
            stack.push(item);
        }
        else{
            const lastEl = stack.pop();
            if(item !== obj[lastEl])
                return 'bad'
        }
    }

    return stack.length === 0 ? 'good' : 'bad';
}
