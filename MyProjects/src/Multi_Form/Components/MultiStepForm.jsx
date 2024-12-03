import React, { useState } from "react";
import Personal from "./Step1";
import Address from "./Step2";
import Review from "./Step3";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderStep = () =>{
    switch (step) {
        case 1:
            return <Personal nextStep={nextStep} handleChange={handleChange} formData={formData}/>
        case 2:
            return <Address nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData}/>
        case 3:
            return <Review prevStep={prevStep} formData={formData}/>
        default:
            return null;
    }
  }
  return (
    <div>
     { renderStep()}
    </div>
  );
};

export default MultiStepForm;
