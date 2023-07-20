"use client";

import { useState } from "react";

const Input = (props) => {
  const [inputText, setInput] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setInput(value);
  }

  return (
    <div className="input_form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add Items"
        className="form"
        value={inputText}
      />
      <button
        onClick={() => {
          props.addItem(inputText);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default Input;
