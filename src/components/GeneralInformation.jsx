import Input from "./Input"

export default function GeneralInformation() {
    return (
        <div className="wrapper">
            <Input label="Name" type="text"/>
            <Input label="Email" type="email"/>
            <Input label="Telephone" type="number"/>
        </div>
    )
}