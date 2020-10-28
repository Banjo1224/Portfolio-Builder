const ProjectList = ({ projects }) => {

  return projects.map((project, i) => {
    return (
      <div key={i} id='project'>
        <img src={project.picture} alt=""></img>
        <a href={project.link}>{project.name}</a>
      </div>
    )
  })
}

export default ProjectList;