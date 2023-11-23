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
    <input
      type={type}
      id={id}
      className={className}
      onChange={handleInput}
      value={data}
      aria-label={label}
      placeholder={label}
      required
    />
  );
}
