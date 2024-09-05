import { useState, useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "@/context/TodoContext";
import { Add } from "@/utilities/icons.utilities.jsx";
export default function Main() {
  const { todos, addTodo } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  function onChangeHandler(e) {
    setTodo(e.target.value);
    setError("");
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    if (!todo.trim() || !todo) {
      setError("Please write something");
      return;
    }
    const todoAlreadyExists = todos.some((t) => t.text === todo);
    if (todoAlreadyExists) {
      setError("Todo already exists");
      return;
    }
    addTodo({
      id: Date.now(),
      text: todo,
      completed: false,
    });
    setTodo("");
  }
  return (
    <main className="bg-background min-h-[calc(100vh-100px)]">
      <section className="container max-w-4xl relative -top-7 pb-9">
        <form
          action=""
          className="flex gap-2 text-text"
          onSubmit={onSubmitHandler}
        >
          <input
            type="text"
            value={todo}
            onChange={onChangeHandler}
            placeholder="Write your note and press “Enter” ..."
            className="rounded-lg focus:outline-none placeholder-completed bg-Item border border-[#0D0D0D] w-full p-4"
          />
          <button className="flex items-center gap-2 py-4 px-[18px] bg-colorBtn rounded-lg">
            <span className="text-sm font-bold">Add</span>
            <Add />
          </button>
        </form>
        {error && (
          <p className="text-sm ml-1 text-red-500 font-medium tracking-wider mt-1">
            {error}
          </p>
        )}
      </section>
      <div className="container max-w-4xl flex justify-between items-center pb-6">
        {!todos.length ? (
          <h2 className="text-text text-2xl text-center mx-auto font-medium">
            No todos yet...
          </h2>
        ) : (
          <>
            <div className="flex items-center gap-2 font-bold">
              <span className="text-primary text-sm">Tasks</span>
              <span className="block bg-taskNumberbg text-taskNumber py-[2px] px-2 rounded-full text-xs">
                {todos.length}
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <span className="text-secondary">Done</span>
              <span className="block bg-taskNumberbg text-taskNumber py-[2px] px-2 rounded-full text-xs">
                {todos.filter((todo) => todo.completed).length} of{" "}
                {todos.length}
              </span>
            </div>
          </>
        )}
      </div>
      <section className="container max-w-4xl flex flex-col gap-2 overflow-y-auto max-h-96">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </section>
    </main>
  );
}
