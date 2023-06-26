import {createSlice} from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export const initialState: Todo[] = [];

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date().toISOString(),
                title: action.payload.title,
                completed: false
            };
            state.push(todo);
        },
        toggleCompleted: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});
export const { addTodo, toggleCompleted } = todoSlice.actions;