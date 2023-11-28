import { useState } from "react";
import EditGeneralInformation from "./components/EditGeneralInfo";
import EditPersonalStatement from "./components/EditPersonalStatement";
import EditWorkExperience from "./components/EditWorkExperience";
import EditEducation from "./components/EditEducation";
import personalData from "./data/personal-data";
import createJobData from "./data/job-data";
import "./App.css";
import "./cv-page.css";
import "./edit-page.css";

function App() {
  const [editPageVisibility, setEditPageVisibility] = useState("unhidden");
  const [cvPageVisibility, setCvPageVisibility] = useState("hidden");
  const [data, setData] = useState(personalData);
  const [jobData, setJobData] = useState([]);

  // EVENT HANDLERS
  const handleSubmit = () => {
    const inputs = Array.from(document.getElementsByTagName("input"));
    if (!inputs.some((input) => !input.checkValidity())) {
      setEditPageVisibility("hidden");
      setCvPageVisibility("unhidden");
    }
  };

  const handleEdit = () => {
    setCvPageVisibility("hidden");
    setEditPageVisibility("unhidden");
  };

  const handleInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleJobInput = (e) => {
    const jobsCopy = [...jobData];
    const jobIndex = e.target.parentNode.parentNode.parentNode.id - 1;
    const currentJob = jobsCopy[jobIndex];
    const newJobData = { ...currentJob, [e.target.className]: e.target.value };
    const updatedJobData = jobsCopy.map((job, index) =>
      index === jobIndex ? newJobData : job
    );
    setJobData(updatedJobData);
    console.log(updatedJobData);
  };

  const handleNewJobData = () => {
    setJobData([...jobData, createJobData()]);
  };

  const handleRemoveJobData = (e) => {
    console.log(e.target.parentNode.parentNode.id);
    setJobData(
      jobData.filter(
        (job) => e.target.parentNode.parentNode.id != jobData.indexOf(job) + 1
      )
    );
  };

  return (
    <>
      {/* CV EDITOR PAGE */}
      <div className={`edit-page-ctnr ${editPageVisibility}`}>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="fieldset-display">
            <div className="screen-left">
              <fieldset>
                <EditGeneralInformation data={data} handleInput={handleInput} />
              </fieldset>
              <fieldset>
                <EditPersonalStatement
                  data={data.statement}
                  handleInput={handleInput}
                />
              </fieldset>
              <fieldset>
                <EditEducation data={data} handleInput={handleInput} />
              </fieldset>
            </div>
            <div className="screen-right">
              <fieldset>
                <EditWorkExperience
                  jobData={jobData}
                  handleNewJobData={handleNewJobData}
                  handleRemoveJobData={handleRemoveJobData}
                  handleInput={handleJobInput}
                />
              </fieldset>
            </div>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {/* CV DISPLAY PAGE */}
      <div className={`cv-page ${cvPageVisibility}`}>
        <header>
          <h1 className="cv-name">{data.name}</h1>
          <div className="contact-details">
            <p className="cv-email">{data.email}</p>
            <p className="cv-number">{data.number}</p>
          </div>
        </header>
        {data.statement !== "" && (
          <section className="cv-personal-statement">
            <h2>Personal Statement</h2>
            <p>{data.statement}</p>
          </section>
        )}
        <section className="cv-experience">
          <h2>Work Experience</h2>
          {jobData.map((job, index) => {
            return (
              <div key={index}>
                <h3>
                  {job.company +
                    " (" +
                    job.title +
                    "): " +
                    job["job-start"] +
                    " to " +
                    job["job-end"]}
                </h3>
                <h4>Responsibilities:</h4>
                {job["first-resp"] !== "" && <li>{job["first-resp"]}</li>}
                {job["second-resp"] !== "" && <li>{job["second-resp"]}</li>}
                {job["third-resp"] !== "" && <li>{job["third-resp"]}</li>}
                {job["fourth-resp"] !== "" && <li>{job["fourth-resp"]}</li>}
                {job["fifth-resp"] !== "" && <li>{job["fifth-resp"]}</li>}
              </div>
            );
          })}
        </section>
        <section className="cv-education">
          <h2>Education</h2>
          <h3>
            {data.school +
              `(${data.award}): ` +
              data["school-start"] +
              " to " +
              data["school-end"]}{" "}
          </h3>
        </section>
        <button type="button" onClick={handleEdit}>
          Edit CV
        </button>
      </div>
    </>
  );
}

export default App;
