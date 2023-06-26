async function getHello(): Promise<JSON> {
    const response = await fetch('http://localhost:8080/api/hello');
    switch (response.status) {
        case 200:
            return await response.json();
        default:
            throw Error('unknown response status');
    }
}

async function getHelloName(name: string): Promise<JSON> {
    const response = await fetch(`http://localhost:8080/api/hello/${name}`);
    switch (response.status) {
        case 200:
            return await response.json();
        default:
            throw Error('unknown response status');
    }
}

export {getHello, getHelloName};