export default function Input({label, type}) {
    return (
    <label> 
        {label}{":" + " "}
        <input type={type} />
    </label>
    )
}