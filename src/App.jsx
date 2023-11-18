import { useState } from 'react'
import EditGeneralInformation from './components/EditGeneralInfo'
import EditPersonalStatement from './components/EditPersonalStatement'
import EditWorkExperience from './components/EditWorkExperience'
import EditEducation from './components/EditEducation'
import personalData from './data/personal-data'
import createJobData from "./data/job-data";
import './App.css'



function App() {
  const [editPageVisibility, setEditPageVisibility] = useState('unhidden');
  const [cvPageVisibility, setCvPageVisibility] = useState('hidden');
  const [data, setData] = useState(personalData);
  const [jobData, setJobData] = useState([]);
  const handleSubmit = () => {
    setEditPageVisibility("hidden");
    setCvPageVisibility("unhidden")
  };
  const handleEdit = () => {
    setCvPageVisibility("hidden");
    setEditPageVisibility("unhidden")
  };
  const handleInput = (e) => {
    const dataCopy = data;
    setData({...dataCopy, [e.target.id]: e.target.value})
  } 

  const handleJobInput = (e) => {
    const jobsCopy = [...jobData];
    const jobIndex = e.target.parentNode.parentNode.parentNode.parentNode.id - 1
    const currentJob = jobsCopy[jobIndex];
    const newJobData = {...currentJob, [e.target.className]: e.target.value};
    const updatedJobData = jobsCopy.map((job, index) =>
      index === jobIndex ? newJobData : job
     )
    setJobData(updatedJobData);
    console.log(updatedJobData);
  }

   const handleNewJobData = () => {
    setJobData([...jobData, createJobData()]);
  }

  const handleRemoveJobData = (e) => {
   setJobData(jobData.filter(job => e.target.parentNode.parentNode.id != (jobData.indexOf(job) + 1)));
  }

    return (
      <div className="main-ctnr">
        <div className={`edit-page-ctnr ${editPageVisibility}`} >
          <h1>CV</h1>
          <form action="">
            <EditGeneralInformation data={data} handleInput={handleInput}/>
            <EditPersonalStatement data={data.statement} handleInput={handleInput}/>
            <EditWorkExperience jobData={jobData} handleNewJobData={handleNewJobData} handleRemoveJobData={handleRemoveJobData} handleInput={handleJobInput}/>
            <EditEducation data={data} handleInput={handleInput}/>
            <button type='button' onClick={handleSubmit}>Submit</button>
          </form>
        </div>
        <div className={`cv-page-ctnr ${cvPageVisibility}`}>
        <h1>Hello</h1>
        <h2 ></h2>
        <button type='button' onClick={handleEdit}>Edit CV</button>
            </div>
      </div>
    )
}

export default App;
