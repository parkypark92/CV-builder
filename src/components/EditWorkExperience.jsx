import { v4 as uuidv4} from "uuid";
import Input from "./Input"
import { useState } from "react"

export default function EditWorkExperience() {
    const [jobIds, setJobIds] = useState([]);

    const handleAddJob = () => setJobIds([...jobIds, jobIds.length + 1]);
    const handleDeleteJob = (e) => {
        const removedId = jobIds.filter(id => e.target.parentNode.parentNode.id != (jobIds.indexOf(id) + 1));
        const newIds = removedId.map((id, index) => id = index + 1);
        setJobIds(newIds);

    }
    const addButtonMessage = jobIds.length === 0 ? "Add your first job!" : "Add a new job!"
    return (
        <div className="wrapper ">
            <h2 className="section-heading">Work Experience</h2>
            <button type="button" className="add-job-button" onClick={handleAddJob}>{addButtonMessage}</button>

            {jobIds.map(jobId => {
                return (
                <div key={uuidv4()} id={jobId}>
                    <h3>Job {jobId}</h3>
                    <div className="individual-job">
                        <div className="wrapper inputs">
                            <Input label="Company Name:" id={"company" + jobId}></Input>
                            <Input label="Start Date:" type='date' id={"job-start" + jobId}></Input>
                            <Input label="End Date:" type='date' id={"job-end" + jobId}></Input>
                            <Input label="Job Title:" id={"title" + jobId}></Input>
                            <Input label="Responsibilities:" id={"responsibilities" + jobId}></Input>
                            <Input label=""></Input>
                            <Input label=""></Input>
                            <Input label=""></Input>
                            <Input label=""></Input>
                            
                        </div>
                        <button type="button" className="delete-job-button" onClick={handleDeleteJob}>Remove Job</button>
                    </div>
                </div>   
                )
            })}
        </div>
    )
}