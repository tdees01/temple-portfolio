import React from 'react'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="gradient-background">
      <div className="content">
        App
        <NavBar />
        <About />
        <Projects />
        <Contact />
        </div>
    </div>
  )
}

export default App

