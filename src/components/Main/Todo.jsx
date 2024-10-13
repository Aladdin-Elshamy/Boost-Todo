import { Checked, Unchecked, Delete } from "@/utilities/icons.utilities.jsx";
import { useContext } from "react";
import { TodoContext } from "@/context/TodoContext";
import PropTypes from "prop-types";
import ReactLinkify from "react-linkify";
import { Edit } from "@/utilities/icons.utilities";
import clsx from "clsx";

export default function Todo({ todo }) {
  const { deleteTodo, editTodo, toggleTodo } = useContext(TodoContext);
  // A small component that displays the link in a new tab
  const componentDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
  return (
    <div className="flex justify-between gap-5 bg-Item p-4 rounded-lg">
      <div className="flex gap-3 items-center">
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? <Checked /> : <Unchecked />}
        </button>
        <p
          className={clsx("text-text text-sm", {
            "line-through text-completed": todo.completed,
          })}
        >
          <ReactLinkify componentDecorator={componentDecorator}>
            {todo.text}
          </ReactLinkify>
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1" onClick={() => deleteTodo(todo.id)}>
          <Delete />
        </button>
        <button
          className="p-1"
          onClick={() => {
            const newTodoText = prompt("Enter new todo text");
            if (newTodoText) {
              editTodo(todo.id, { text: newTodoText });
            }
          }}
        >
          <Edit />
        </button>
      </div>
    </div>
  );
}
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
