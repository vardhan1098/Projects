import React, { useState } from "react";
import EditModal from "./EditModal";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModal,setIsModal] = useState(false);
  const [updateTodo,setUpdatedTodo] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      alert("Please Add Todo");
    } else {
      const newTodo = {
        title: inputValue,
        id: new Date().getTime(),
      };
      setTodos([...todos, newTodo]);
      setInputValue("")
    }
  };

  const handleDelete = (id) =>{
    setTodos(todos.filter(item => item.id !== id))
  }

  const handleEditTodo = (selectedTodo) =>{
    setUpdatedTodo(selectedTodo)
    setIsModal(true)
  }

  const handleSaveTodo =(updatedTodo)=>{
    setTodos(todos.map(todo => todo.id === updateTodo.id ? {...todo, title:updatedTodo} : todo ))
    setIsModal(false)
    setUpdatedTodo(null)
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your Todo.."
      />
      <button onClick={addTodo}>AddTodo</button>
      {todos.map((todo, idx) => (
        <ul key={idx} style={{display:"flex",gap:"10px",alignItems:"center"}}>
          <li>{todo.title}</li>
          <button onClick={()=>handleDelete(todo.id)}>❌</button>
          <button onClick={()=>handleEditTodo(todo.id)}>🖊️</button>
        </ul>
      ))}
      <>
      {todos.length === 0 && <p>No Todos Please Add Todo</p>}
      </>

      {isModal && <EditModal todo = {updateTodo}
       handleSave ={handleSaveTodo} 
       handleClose = {()=>setIsModal(false)}/> }
    </div>
  );
}

export default Todo;
