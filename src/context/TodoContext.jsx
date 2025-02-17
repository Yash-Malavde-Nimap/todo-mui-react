/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const todosArr = JSON.parse(localStorage.getItem("todos"));
  // console.log();
  const [todos, setTodos] = useState(todosArr);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        title: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInput("");

      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    }
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    localStorage.setItem("todos", [
      JSON.stringify(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      ),
    ]);
  };

  const toggleDelete = (id) => {
    console.log(todos);
    localStorage.setItem("todos", [
      JSON.stringify(todos.filter((todo) => todo.id !== id)),
    ]);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, toggleCompletion, toggleDelete, addTodo,input,setInput }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
