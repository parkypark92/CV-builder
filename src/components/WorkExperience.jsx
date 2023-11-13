import { v4 as uuidv4} from "uuid";
import Input from "./Input"
import { useState } from "react"

export default function WorkExperience() {
    const [jobIds, setJobIds] = useState([1]);

    const handleAddJob = () => setJobIds([...jobIds, jobIds.length + 1]);
    const handleDeleteJob = (e) => {
        const removedId = jobIds.filter(id => e.target.parentNode.parentNode.id != (jobIds.indexOf(id) + 1));
        const newIds = removedId.map((id, index) => id = index + 1);
        console.log(newIds)
        setJobIds(newIds);

    }

    return (
        <div className="wrapper ">
            <h2>Work Experience</h2>
            {jobIds.map(jobId => {
                return (
                    <div className="wrapper inputs" key={uuidv4()} id={jobId}>
                        <div className="job-heading">
                            <h3>Job {jobId}</h3>
                            <button type="button" id={"delete-button-" + jobId} onClick={handleDeleteJob}>Remove Job</button>
                        </div>
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