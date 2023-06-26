import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./todoSlice.ts";
export const store = configureStore({
    reducer: {
        todos: todoSlice.reducer
    },
});