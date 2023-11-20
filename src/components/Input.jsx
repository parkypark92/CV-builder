// import { useState } from "react"

export default function Input({
  label,
  type = "text",
  id,
  className,
  data,
  handleInput,
}) {
  return (
    <div className="input-ctnr">
      <label htmlFor={id}>{label} </label>
      <input
        type={type}
        id={id}
        className={className}
        onChange={handleInput}
        value={data}
        required
      />
    </div>
  );
}
