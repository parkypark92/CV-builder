// import { useState } from "react"

export default function Input({
  label,
  type = "text",
  id,
  className,
  maxlength,
  data,
  handleInput,
  isRequired = true,
}) {
  if (isRequired) {
    return (
      <input
        type={type}
        id={id}
        className={className}
        maxLength={maxlength}
        onChange={handleInput}
        value={data}
        aria-label={label}
        placeholder={label}
        required
      />
    );
  }
  return (
    <input
      type={type}
      id={id}
      className={className}
      maxLength={maxlength}
      onChange={handleInput}
      value={data}
      aria-label={label}
      placeholder={label + " (Optional)"}
    />
  );
}
