import React from "react";

const Review = ({ prevStep, formData }) => {
  const handleSubmit = () => {
    alert("form Submitted Successfully");
    console.log(formData);
  };
  return (
    <div>
      <h2>Review Details</h2>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.address}</p>
      <p>{formData.city}</p>
      <p>{formData.zip}</p>
      <>
        <button onClick={prevStep}>Back</button>
        <button onClick={handleSubmit}> Submit</button>
      </>
    </div>
  );
};

export default Review;
