import Input from "./Input"

export default function GeneralInformation() {
    return (
        <div className="wrapper">
            <h2 className="section-heading">General Information</h2>
            <div className="wrapper inputs">
                <Input label="Name" id="name"/>
                <Input label="Email" type="email" id="email"/>
                <Input label="Telephone" type="number" id="tel"/>
            </div>
        </div>
    )
}