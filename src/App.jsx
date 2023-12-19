import "./App.css";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { dropTodo } from "./store/todoSlice";

import TodoList from "./component/TodoList";
import InputField from "./component/InputField";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(dropTodo({ text }));
    setText("");
  };


  const toggleCompleted = (todoId) => {
    // setTodos(todos.map(todo => {
    //   if (todo.id !== todoId) return todo
    //   return {
    //     ...todo,
    //     completed: !todo.completed,
    //   }
    // }))
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
