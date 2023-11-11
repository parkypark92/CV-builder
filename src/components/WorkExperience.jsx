import Input from "./Input"
import { useState } from "react"

export default function WorkExperience() {
    const [jobIds, setJobIds] = useState([1]);

    const handleAddJob = () => setJobIds([...jobIds, jobIds.length + 1]);

    return (
        <div className="wrapper ">
            <h2>Work Experience</h2>
            {jobIds.map(jobId => {
                return (
                    <div className="wrapper inputs" key={jobId}>
                        <h3>Job {jobId}</h3>
                <Input label="Company Name" id={"company" + jobId}></Input>
                <Input label="Start Date" type='date' id={"job-start" + jobId}></Input>
                <Input label="End Date" type='date' id={"job-end" + jobId}></Input>
                <Input label="Job Title" id={"title" + jobId}></Input>
                <Input label="Responsibilities" id={"responsibilities" + jobId}></Input>
            </div>
                )
            })}
            
            <button type="button" onClick={handleAddJob}>ADD</button>
        </div>
    )
}