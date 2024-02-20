// Write your code here

import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props
  const renderViews = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard projectDetails={each} key={each.id} />
    }
    return <CourseTimeLineCard courseDetails={each} key={each.id} />
  }

  return (
    <div>
      <h1 className="main-h1">
        MY JOURNEY OF <br />
        <span className="main-p1">CCBP 4.0</span>
      </h1>

      <Chrono
        className="chron-container"
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(each => renderViews(each))}
      </Chrono>
    </div>
  )
}

export default TimeLineView
