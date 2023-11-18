import { v4 as uuidv4} from "uuid";
import Input from "./Input"
import { useState } from "react"

export default function EditWorkExperience({jobData, handleNewJobData, handleRemoveJobData, handleInput}) {
    const [jobIds, setJobIds] = useState([]);


    const handleAddJob = () => {
        setJobIds([...jobIds, jobIds.length + 1]);
        handleNewJobData();
    }
    
    const handleDeleteJob = (e) => {
        const removedId = jobIds.filter(id => e.target.parentNode.parentNode.id != (jobIds.indexOf(id) + 1));
        const newIds = removedId.map((id, index) => id = index + 1);
        setJobIds(newIds);
        handleRemoveJobData(e);
    }
    const addButtonMessage = jobIds.length === 0 ? "Add your first job!" : "Add a new job!"
    return (
        <div className="wrapper ">
            <h2 className="section-heading">Work Experience</h2>
            <button type="button" className="add-job-button" onClick={handleAddJob}>{addButtonMessage}</button>

            {jobIds.map(jobId => {
                return (
                <div key={jobId} id={jobId}>
                    <h3>Job {jobId}</h3>
                    <div className="individual-job">
                        <div className="wrapper inputs">
                            <Input label="Company Name:" id={"company" + jobId} className="company" data={jobData[jobId - 1]["company"]} handleInput={handleInput}></Input>
                            <Input label="Start Date:" type='date' id={"job-start" + jobId} className="job-start" data={jobData[jobId - 1]["job-start"]} handleInput={handleInput}></Input>
                            <Input label="End Date:" type='date' id={"job-end" + jobId} className="job-end" data={jobData[jobId - 1]["job-end"]} handleInput={handleInput}></Input>
                            <Input label="Job Title:" id={"title" + jobId} className="title" data={jobData[jobId - 1]["title"]} handleInput={handleInput}></Input>
                            <Input label="Responsibilities:" id={"first-resp" + jobId} className="first-resp" data={jobData[jobId - 1]["first-resp"]} handleInput={handleInput}></Input>
                            <Input label="" id={"second-resp" + jobId} className="second-resp" data={jobData[jobId - 1]["second-resp"]} handleInput={handleInput}></Input>
                            <Input label="" id={"third-resp" + jobId} className="third-resp" data={jobData[jobId - 1]["third-resp"]} handleInput={handleInput}></Input>
                            <Input label="" id={"fourth-resp" + jobId} className="fourth-resp" data={jobData[jobId - 1]["fourth-resp"]} handleInput={handleInput}></Input>
                            <Input label="" id={"fifth-resp" + jobId} className="fifth-resp" data={jobData[jobId - 1]["fifth-resp"]} handleInput={handleInput}></Input>
                            
                        </div>
                        <button type="button" className="delete-job-button" onClick={handleDeleteJob}>Remove Job</button>
                    </div>
                </div>   
                )
            })}
        </div>
    )
}