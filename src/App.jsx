import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import './App.css'

function App() {
  return (
    
    <div className='main-ctnr'>
      <h1>CV</h1>
      <GeneralInformation/>
      <WorkExperience/>
      <Education/>
    </div>
  )
}

export default App
