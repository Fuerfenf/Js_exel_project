console.log('module js');

async function start() {
    return await Promise.resolve('acync work good');
}

start().then(console.log);
