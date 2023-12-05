import Input from "./Input";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { mdiMinus } from "@mdi/js";

export default function EditWorkExperience({
  jobData,
  handleNewJobData,
  handleRemoveJobData,
  handleInput,
}) {
  const [jobIds, setJobIds] = useState([]);

  const handleAddJob = () => {
    setJobIds([...jobIds, jobIds.length + 1]);
    handleNewJobData();
  };
  const handleDeleteJob = (e) => {
    const removedId = jobIds.filter(
      (id) => e.target.parentNode.parentNode.id != jobIds.indexOf(id) + 1
    );
    const newIds = removedId.map((id, index) => (id = index + 1));
    setJobIds(newIds);
    handleRemoveJobData(e);
  };
  const addButtonMessage = jobIds.length === 0 && <p>Add your first job!</p>;
  return (
    <div className="wrapper ">
      <h2 className="section-heading">Work Experience</h2>
      {addButtonMessage}
      {jobIds.map((jobId) => {
        return (
          <div key={jobId} id={jobId}>
            <div className="individual-job-heading">
              <h3>Job {jobId}</h3>

              <button
                type="button"
                className="delete-job-button"
                onClick={handleDeleteJob}
              >
                <Icon path={mdiMinus} size={1} className="delete-icon" />
              </button>
            </div>
            <div className="individual-job">
              <div className="wrapper job inputs ">
                <Input
                  label="Company Name"
                  id={"company" + jobId}
                  className="company"
                  maxlength={30}
                  data={jobData[jobId - 1]["company"]}
                  handleInput={handleInput}
                ></Input>
                <Input
                  label="Job Title"
                  id={"title" + jobId}
                  className="title"
                  maxlength={30}
                  data={jobData[jobId - 1]["title"]}
                  handleInput={handleInput}
                ></Input>
                <div className="start-end-dates">
                  <div className="start-date">
                    <p>Start:</p>
                    <Input
                      label="Start Date"
                      type="date"
                      id={"job-start" + jobId}
                      className="job-start"
                      data={jobData[jobId - 1]["job-start"]}
                      handleInput={handleInput}
                    ></Input>
                  </div>
                  <div className="end-date">
                    <p>End:</p>
                    <Input
                      label="End Date"
                      type="date"
                      id={"job-end" + jobId}
                      className="job-end"
                      data={jobData[jobId - 1]["job-end"]}
                      handleInput={handleInput}
                    ></Input>
                  </div>
                </div>
                <Input
                  label="Job Responsibility"
                  id={"first-resp" + jobId}
                  className="first-resp"
                  maxlength={150}
                  data={jobData[jobId - 1]["first-resp"]}
                  handleInput={handleInput}
                  isRequired={false}
                ></Input>
                <Input
                  label="Job Responsibility"
                  id={"second-resp" + jobId}
                  className="second-resp"
                  maxlength={150}
                  data={jobData[jobId - 1]["second-resp"]}
                  handleInput={handleInput}
                  isRequired={false}
                ></Input>
                <Input
                  label="Job Responsibility"
                  id={"third-resp" + jobId}
                  className="third-resp"
                  maxlength={150}
                  data={jobData[jobId - 1]["third-resp"]}
                  handleInput={handleInput}
                  isRequired={false}
                ></Input>
                <Input
                  label="Job Responsibility"
                  id={"fourth-resp" + jobId}
                  className="fourth-resp"
                  maxlength={150}
                  data={jobData[jobId - 1]["fourth-resp"]}
                  handleInput={handleInput}
                  isRequired={false}
                ></Input>
              </div>
            </div>
          </div>
        );
      })}
      <button type="button" className="add-job-button" onClick={handleAddJob}>
        <Icon path={mdiPlus} size={1} />
      </button>
    </div>
  );
}
