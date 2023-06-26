import {describe, it, expect} from "vitest";
import {addTodo, todoSlice, toggleCompleted } from "./todoSlice.ts";

describe('todoSlice', () => {
    it('should create a reducer', () => {
        expect(todoSlice.reducer).toBeDefined();
    });

    it('should support the addTodo action', () => {
        expect(todoSlice.actions).toContain({addTodo});
    });

    it('should support the addTodo action', () => {
        expect(todoSlice.actions).toContain({toggleCompleted});
    });
});