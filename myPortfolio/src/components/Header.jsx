import React from 'react'

const Header = () => {
  return (
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
            <a href="#about" className="mr-4">About</a>
            <a href="#projects" className="mr-4">Projects</a>
            <a href="#contact">Contact</a>
            </nav>
        </div>
      </header>
  )
}

export default Header