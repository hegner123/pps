import PropTypes from 'prop-types'
import useUsers from '../hooks/users/useUsers'

const ProjectCard = ({
  primary,
  date,
  projectName,
  author,
  songCount,
  link,
  ...props
}:any) => {
  const { users } = useUsers(author)
  return (
    <a href={link}>
      <div className="card">
        <p className="date">{date}</p>
        <h3 className="title">{projectName}</h3>
        <div className="description">
          <p className="author whitespace-nowrap">{users}</p>
          <p className="song-count">{songCount}</p>
        </div>
      </div>
    </a>
  )
}

ProjectCard.propTypes = {
  primary: PropTypes.bool,
  date: PropTypes.string,
  projectName: PropTypes.string,
  author: PropTypes.string,
  songCount: PropTypes.string,
  link: PropTypes.string
}

export default ProjectCard
