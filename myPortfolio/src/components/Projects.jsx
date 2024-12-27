import React from 'react'
import ProjectsContainer from './ProjectsContainer'

const Projects = () => {
  return (
    <section id="projects" className="py-8 bg-gray-100"> 
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Projetos Profissionais e pessoais</h2> 
            <ProjectsContainer />
        </div> 
    </section>
  )
}

export default Projects