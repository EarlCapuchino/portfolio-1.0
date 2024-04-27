import React from 'react';
import Personal from './components/Personal';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='panel'>
        <div className="leftPanel">
          <Personal />
          <About />
          <Navbar />
        </div>
        <div className="rightPanel" id="rightPanel">
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contacts/>
        </div>
     </div>
    </div>
  );
}

export default App;
