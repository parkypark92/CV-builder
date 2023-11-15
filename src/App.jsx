import { useState } from 'react'
import EditGeneralInformation from './components/EditGeneralInfo'
import EditPersonalStatement from './components/EditPersonalStatement'
import EditWorkExperience from './components/EditWorkExperience'
import EditEducation from './components/EditEducation'
import personalData from './data/personal-data'
import './App.css'



function App() {
  const [editPageVisibility, setEditPageVisibility] = useState('unhidden');
  const [cvPageVisibility, setCvPageVisibility] = useState('hidden');
  const [data, setData] = useState(personalData);
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

    return (
      <div className="main-ctnr">
        <div className={`edit-page-ctnr ${editPageVisibility}`} >
          <h1>CV</h1>
          <form action="">
            <EditGeneralInformation data={data} handleInput={handleInput}/>
            <EditPersonalStatement/>
            <EditWorkExperience/>
            <EditEducation/>
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
