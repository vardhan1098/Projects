import React, { useState } from "react";
import ReactDOM from "react-dom";

const EditModal = ({ todo, handleSave, handleClose }) => {
  const [editValue, setEditValue] = useState(todo.title);

  const handleSaveClick = () => {
    if (editValue.trim() !== "") {
      handleSave(editValue);
    }
  };

  return ReactDOM.createPortal(
    <div style={{position:"fixed", top:0,right:0,display:"flex",height:'100%',width:"100%",backgroundColor:"black",alignItems:"center",justifyContent:"center"}}>
      <div style={{background:"white",padding:"20px",borderRadius:"10px",width:'300px', textAlign:"center"}}>
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleClose}>Cancel</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default EditModal;
