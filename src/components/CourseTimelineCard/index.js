// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList, id} = courseDetails
  return (
    <div className="course-main-container" key={id}>
      <div className="course-container1">
        <h2 className="course-h2">{courseTitle}</h2>
        <div className="course-container2">
          <AiFillClockCircle className="course-icon1" />
          <p className="course-p1">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="course-ul-container">
        {tagsList.map(each => (
          <li className="course-list-container" key={each.id}>
            <p className="course-p2">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
