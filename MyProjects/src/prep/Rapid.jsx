import React, { useReducer } from "react";

let initialState = {
    initialState:[]
};
function reducer(state, action) {
  switch (action) {
    case "addTodo":
      if (state.title.trim()=== "") {
        alert("Enter a Todo..");
      } else {
        let newTodo = { title: state, id: new Date().getTime() };
        return [...state, newTodo];
      }
    default:
      return state;
  }
}
const Rapid = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Hello</h2>
      <input
        type="text"
        placeholder="Enter A Todo.."
        value={state}
        onChange={(e) => dispatch(e.target.value)}
      />
      <button onClick={() => dispatch("addTodo")}> AddTodo</button>
      <>
      {
        state.map((todo)=>(
            <ul key={todo.id}>
                <li>{todo.title}</li>
            </ul>
        ))
      }
      </>
    </div>
  );
};

export default Rapid;
