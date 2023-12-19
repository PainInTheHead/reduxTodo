import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    dropTodo(state, action) {
        
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      });
    },
    deleteTodo(state, action) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)


    },
    toggleCompleted(state, action) {
        const toggledtodo = state.todos.find(todo => todo.id === action.payload.id)
        toggledtodo.completed = !toggledtodo.completed
    },
  },
});

export const {dropTodo, deleteTodo, toggleCompleted} = todoSlice.actions

export default todoSlice.reducer
