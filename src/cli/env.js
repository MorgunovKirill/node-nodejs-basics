const parseEnv = () => {    
    const result = [];
    Object.keys(process.env).forEach((key) => {
        if(key.includes('RSS_')) result.push(`${key}=${process.env[key]}`)
    })

    console.log(result.join('; '))
};

parseEnv();