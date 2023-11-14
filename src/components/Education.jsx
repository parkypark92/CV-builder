import Input from "./Input"

export default function Education() {
    return (
        <div className="wrapper ">
            <h2 className="section-heading">Education</h2>
            <div className="wrapper inputs">
                <Input label="School Name" id="school"></Input>
                <Input label="Start Date" type='date' id="school-start"></Input>
                <Input label="End Date" type='date' id="school-end"></Input>
                <Input label="Degree/Cert/Diploma" id="award"></Input>
            </div>

        </div>
    )
}