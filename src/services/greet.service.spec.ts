import {createServer} from "@mocks-server/main";
import {getHello} from "./greet.service";
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
    log: "debug",
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
    it('should yield result', async () => {
        await server.mock.useRouteVariant('hello:200-json-say-hello');
        const result = await getHello();
        expect(result).toEqual({
            "message": "Hello world!",
            "time": "2021-01-01T00:00:00Z",
            "important": true
        });
    });

    it('should yield no data when non is found', async () => {
        await server.mock.useRouteVariant('hello:204-status');
        const response = await getHello();
        expect(response).toBeUndefined();
    });
});