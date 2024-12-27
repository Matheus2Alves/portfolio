import React from 'react'

const ProjectCard = ({title, description, link, linkGithub, logo, image}) => {
  return (
    <div className="bg-white p-4 shadow-md flex flex-col"> 
        <div className="flex flex-row justify-between">
            <h3 className="text-xl font-bold w-9/12">{title}</h3> 
            <img src={logo} alt="vvvv" className="object-right-top"/>          
        </div>
        <p className="text-lg break-words overflow-hidden">{description}</p> 
        <a href={link} target="_blank">Link</a>
        <a href={linkGithub}>Githublink</a>
        <img src={image} alt="" />
    </div> 
  )
}

export default ProjectCard