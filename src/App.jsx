import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import PersonalStatement from './components/PersonalStatement'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'
import './App.css'

function App() {
  return (
    
    <div className='main-ctnr'>
      <h1>CV</h1>
      <form action="">
        <GeneralInformation/>
        <PersonalStatement/>
        <WorkExperience/>
        <Education/>
      </form>
    </div>
  )
}

export default App
