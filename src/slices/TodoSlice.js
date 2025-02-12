import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todos",
    initialState: [],

    reducers : {
        addTodo : (state, action) => {
            return [...state, action.payload];
        },
        deleteTodo : (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        updateTodo : (state, action) => {
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        ...action.payload
                    };
                }
                return todo;
            });
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;