import React from "react";

const Address = ({ handleChange, prevStep, nextStep, formData }) => {
  const { address, city, zip } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (address && city && zip) {
      nextStep();
    } else {
      alert("Please FIll the Details.. ");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Address Details</h1>
      <dl>
        <dt>Address:</dt>
        <dd>
          <input
            type="text"
            onChange={handleChange}
            value={address}
            name="address"
            placeholder="Enter ur Address"
          />
        </dd>
        <dt>City:</dt>
        <dd>
          <input
            type="text"
            placeholder="Enter ur City"
            onChange={handleChange}
            value={city}
            name="city"
          />
        </dd>
        <dt>Zip</dt>
        <dd>
          <input
            type="text"
            placeholder="enter ur zip code"
            value={zip}
            name="zip"
            onChange={handleChange}
          />
        </dd>
      </dl>
      <button onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Address;
