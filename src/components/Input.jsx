// import { useState } from "react"

export default function Input({label, type = "text", id, data, handleInput}) {

    return (
        <div className="input-ctnr">
    <label htmlFor={id}> 
        {label}{" "}
    </label>
    <input type={type} id={id} onChange={handleInput} value={data} />
    </div>
    )
}