import {createServer} from "@mocks-server/main";
import {getHello, getHelloName} from "./greet.service";
import {afterAll, beforeAll, describe, it, expect} from "vitest";

const server = createServer({
    mock: {
        collections: {
            selected: "openapi",
        },
    },
    server: {
        port: 8080,
    },
    log: "error",
    files: {
        enabled: true
    }
});

beforeAll(async () => {
    await server.start();
});

afterAll(async () => {
    await server.stop();
});

describe('GreetService', () => {
    describe('hello', () => {
        it('should yield result', async () => {
            await server.mock.useRouteVariant('hello:200-json-say-hello');
            const result = await getHello();
            expect(result).toEqual({
                "message": "Hello world!",
                "time": "2021-01-01T00:00:00Z",
                "important": true
            });
        });
    });
    describe('hello name', () => {
        it('should yield result John', async () => {
            await server.mock.useRouteVariant('hello-name:200-json-hello-john');
            const result = await getHelloName('John');
            expect(result).toEqual({
                "message": "Hello John Doe",
                "time": "2016-10-25T12:00:00Z",
                "important": false
            });
        });

        it('should yield result Jane', async () => {
            await server.mock.useRouteVariant('hello-name:200-json-hello-jane');
            const result = await getHelloName('Jane');
            expect(result).toEqual({
                "message" : "Hello Jane Austin",
                "time" : "2016-10-25T12:00:00Z",
                "important" : true
            });
        });
    });
});