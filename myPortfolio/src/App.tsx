import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ResumeButton from './components/ResumeButton'


const App = () => {
  return (
    <div className="gradient-background">
      <div className="content">
        <div>
          <NavBar />
          <ResumeButton />
        </div>
        <div>
          <section id="about" className="scroll-mt-32 scroll-smooth">
            <About />
          </section>
        </div>
        <div>
          <section id="projects" className="scroll-mt-32 scroll-smooth">
            <Projects />
          </section>
        </div>
        <div>
          <section id="contact" className="scroll-mt-32 scroll-smooth">
            <Contact />
          </section>
        </div>
        </div>
    </div>
  )
}

export default App

