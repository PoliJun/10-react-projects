import "../styles/Todo.scss";

const Todo = ({ todos, setTodos, input, setInput }) => {
  const generateId = () => {
    return Math.floor(Math.random() * 10);
  };

  const handleSubmit = () => {
    // setTodos((todos) => {
    // return  todos.concat({
    //     text: input,
    //     id: generateId(),
    //   });
    // });
    setTodos([...todos, { text: input, id: generateId() }]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <section className="todo-root">
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul className="todos-list">
          {todos.map(({ id, text }) => (
            <li className="todo" key={id}>
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                {/* pass a function */}X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Todo;
