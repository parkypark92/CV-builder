import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import PersonalStatement from './components/PersonalStatement'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import './App.css'

function App() {
  const [page, setPage] = useState('edit-page');
  const handleSubmit = () => setPage("completed-cv");
  const handleEdit = () => setPage("edit-page");
  if(page === 'edit-page') {
    return (
      <div className='main-ctnr'>
        <h1>CV</h1>
        <form action="">
          <GeneralInformation/>
          <PersonalStatement/>
          <WorkExperience/>
          <Education/>
          <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Hello</h1>
        <button type='button' onClick={handleEdit}>Edit CV</button>
      </div>
    )
  }
}

export default App;
