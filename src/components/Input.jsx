export default function Input({label, type = "text", id}) {
    return (
        <div className="input-ctnr">
    <label htmlFor={id}> 
        {label}{":" + " "}
    </label>
    <input type={type} id={id} />
    </div>
    )
}