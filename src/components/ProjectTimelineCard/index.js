// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectData} = props
  const {projectTitle, description, duration, imageUrl, projectUrl} =
    projectData

  return (
    <div>
      <img src={imageUrl} alt="project" className="image-size" />
      <div className="title-duration">
        <h1>{projectTitle}</h1>
        <div className="calendar-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
