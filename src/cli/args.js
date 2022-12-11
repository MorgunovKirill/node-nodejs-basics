const parseArgs = () => {
    const temp = process.argv.slice(2).reduce((acc, cur) => {
        if (cur.includes('--')) {
            acc.keys.push(cur)
        } else {
            acc.values.push(cur)
        }
        return acc
    }, {keys: [], values: []});

    const result = temp.keys.map((el, i) => {
        return `${el} is ${temp.values[i]}`
    }).join(', ')
    
    console.log(result)
};

parseArgs();