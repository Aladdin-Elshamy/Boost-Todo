import { createContext } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "@/hooks/useLocalStorage";
export const TodoContext = createContext();

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const editTodo = (id, updatedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
