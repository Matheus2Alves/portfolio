import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-8 bg-gray-100"> 
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projects</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div className="bg-white p-4 shadow-md"> 
                    <h3 className="text-xl font-bold">Project 1</h3> 
                    <p className="text-lg">Description of project 1.</p> 
                </div> 
                <div className="bg-white p-4 shadow-md"> 
                    <h3 className="text-xl font-bold">Project 2</h3> 
                    <p className="text-lg">Description of project 2.</p> 
                </div> 
            </div> 
        </div> 
    </section>
  )
}

export default Projects