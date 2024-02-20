// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
    id,
  } = projectDetails

  return (
    <div className="project-list-container" key={id}>
      <img className="project-img1" alt="project" src={imageUrl} />
      <div className="project-container1">
        <h2 className="project-h2">{projectTitle}</h2>
        <div className="project-container2">
          <AiFillCalendar className="project-icon1" />
          <p className="project-p1">{duration} </p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="anchor" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
