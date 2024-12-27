import React from 'react'
import './index.css'
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects' 
import Contact from './components/Contact'

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-900"> 
      <Header /> 
      <main> 
        <About /> 
        <Projects /> 
        <Contact /> 
      </main> 
    </div>     
  )
}

export default App
