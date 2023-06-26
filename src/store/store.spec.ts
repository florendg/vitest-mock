import { describe, expect, it} from "vitest";
import {store} from "./store.ts";

describe('store',() => {
    it('should create a store', () => {
        expect(store).toBeDefined();
    });
    it('should have the default state',()=>{
       expect(store.getState()).toEqual({todos:[]});
    });

    it('should support addTodo action',()=>{
        store.dispatch({type:'todos/addTodo',payload:{title:'test'}});
        expect(store.getState().todos.length).toEqual(1);
    });

});