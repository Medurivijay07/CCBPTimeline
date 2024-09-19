// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(item => ({
    title: item.title || item.projectTitle,
  }))

  return (
    <div className="timelineview-container">
      <h1 className="journey-title">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono items={items} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(Item =>
            Item.categoryId === 'COURSE' ? (
              <CourseTimelineCard key={Item.id} courseData={Item} />
            ) : (
              <ProjectTimelineCard key={Item.id} projectData={Item} />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
