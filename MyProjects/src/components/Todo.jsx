// Todo.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../redux/action/action.jsx';

function Todo() {
  const [details, setDetails] = useState("");
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: new Date().getTime(),
      text: details
    }));
    setDetails("");
  };

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
