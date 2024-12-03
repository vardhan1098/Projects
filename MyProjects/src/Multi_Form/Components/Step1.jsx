import React from "react";

function Personal({ nextStep, handleChange, formData }) {
  const { name, email } = formData;


const handleSubmit = (e) =>{
    e.preventDefault();
    if(name && email){
        nextStep()
    }else{
        alert("please fill the details")
    }
}
  return (
    <form onSubmit={handleSubmit}>
      <h2>Personal Details</h2>
      <dl>
        <dt>Name: </dt>
        <dd>
          <input
            type="text"
            placeholder="Enter ur Name.."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </dd>
        <dt>Email:</dt>
        <dd>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Enter ur EMAIL"
            onChange={handleChange}
          />
        </dd>
      </dl>
      <button type="submit">Next</button>
    </form>
  );
}

export default Personal;
