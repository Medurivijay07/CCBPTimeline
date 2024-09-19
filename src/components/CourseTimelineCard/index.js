// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseData} = props
  const {courseTitle, duration, description, tagsList} = courseData
  return (
    <div>
      <div className="title-time">
        <h1>{courseTitle}</h1>
        <div className="clock-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div className="tags-list">
        {tagsList.map(tag => (
          <p className="each-tag" key={tag.id}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
