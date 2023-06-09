module.exports = [
    {
        basePath: "/api",
        collection: {
            id: "hello",
        },
        document: {
            $ref: "../documents/openapi.json"
        }
    },
];