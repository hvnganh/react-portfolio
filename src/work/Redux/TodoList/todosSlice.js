import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export default createSlice({
    name: 'todoList',
    initialState: [{ id: uuidv4, name: 'Learn Redux', completed: false, priority: 'Medium' }],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((todo) => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
        deleteTodos: (state, action) => {
            state.splice(action.payload, 1);
            return state;
        },
    },
});
