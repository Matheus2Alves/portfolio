import React from 'react'
import ProjectCard from './ProjectCard'
import logo50 from "../assets/images/logo50.png"

const ProjectsContainer = () => {
    const projects = [
        {
            id: 1,
            title: "WebSite para uma clínica (Espaço Aline Alves)",
            description: "Loremagjhafgkjsfhjgshjdklfghjsdfgjhsdjhklfghjlksdfgjhksdjhflkghlsjkdfglhjksdfljghkslhdkfjglksjhdgfdhjkl",
            link: "www.youtube.com",
            linkGithub: "faf",
            logo: logo50,
            image: "t"

        },
        {
            id: 2,
            title: "WebSite para uma clínica (Espaço Aline Alves)",
            description: "BLABLABLA",
            link: "www.youtube.com",
            linkGithub: "faf",
            logo: "bla",
            image: "t"

        },
        {
            id: 3,
            title: "WebSite para uma clínica (Espaço Aline Alves)",
            description: "BLABLABLA",
            link: "www.youtube.com",
            linkGithub: "faf",
            logo: "bla",
            image: "t"

        }
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map(project => <ProjectCard key={project.id} {...project} />)}
    </div>
  )
}

export default ProjectsContainer