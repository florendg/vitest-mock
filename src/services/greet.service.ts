async function getHello(): Promise<JSON | string| void> {
    const response = await fetch('http://localhost:8080/api/hello');
    switch (response.status) {
        case 200:
            const result = await response.json();
            return result;
        case 204:
            return;
        case 404:
            return 'not found';
        default:
            return 'unknown response status'
    }
}

export {getHello};