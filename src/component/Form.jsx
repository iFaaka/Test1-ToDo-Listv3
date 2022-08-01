import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text: input,
      complete: false,
      id: uuidv4(),
    };

    if (newTask.text.trim().length !== 0 && newTask.text.trim().length > 3) {
      onSubmit((prevS) => [newTask, ...prevS]);
      setInput("");
    }
  };
  return (
    <form className="form-container input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input form-control"
        placeholder="Ingrese su tarea..."
        onChange={handleChange}
        value={input}
      />

      <button className="form-button btn btn-outline-secondary">Enviar</button>
    </form>
  );
};
