import Input from "./Input"

export default function WorkExperience() {
    return (
        <div className="wrapper ">
            <h2>Work Experience</h2>
            <div className="wrapper inputs">
                <Input label="Company Name" id="company"></Input>
                <Input label="Start Date" type='date' id="job-start"></Input>
                <Input label="End Date" type='date' id="job-end"></Input>
                <Input label="Job Title" id="title"></Input>
                <Input label="Responsibilities" id="responsibilities"></Input>
            </div>

        </div>
    )
}