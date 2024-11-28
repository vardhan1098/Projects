import React from "react";

function Button({onClick,disabled,label, className}) {
  return (
    <>
      <button onClick={onClick} disabled={disabled} className={className}>{ label || "Submit"}</button>
    </>
  );
}

export default Button;
