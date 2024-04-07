import { useState } from "react";
import Todo from "../components/Todo";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <Todo
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
    </>
  );
};
export default TodoPage;
