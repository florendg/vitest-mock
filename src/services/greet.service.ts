async function getHello(): Promise<JSON> {
    const response = await fetch('http://localhost:8080/api/hello');
    switch (response.status) {
        case 200:
            const result = await response.json();
            return result;
        default:
            throw Error('unknown response status');
    }
}

async function getHelloName(name: string): Promise<JSON> {
    const response = await fetch(`http://localhost:8080/api/hello/${name}`);
    switch (response.status) {
        case 200:
            const result = await response.json();
            return result;
        default:
            throw Error('unknown response status');
    }
}

export {getHello, getHelloName};