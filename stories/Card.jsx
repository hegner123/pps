import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

/**
 * Primary UI component for user interaction
 */
export const Card = ({
  primary,
  date,
  projectName,
  author,
  songCount,
  ...props
}) => {
  return (
    <div className="card">
      <p className="date">{date}</p>
      <h3 className="title">{projectName}</h3>
      <div className="description">
        <p className="author">{author}</p>
        <p className="song-count">{songCount}</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  primary: PropTypes.bool,
  date: PropTypes.string,
  projectName: PropTypes.string,
  author: PropTypes.string,
  songCount: PropTypes.string
}

Card.defaultProps = {
  primary: true,
  date: 'Date',
  projectName: 'Project Name',
  author: 'Author',
  songCount: 'Song Count'
}
