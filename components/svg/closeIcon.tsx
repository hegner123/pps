import PropTypes from 'prop-types'

const CloseIcon = ({ extraClasses }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={extraClasses?.join(' ')}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </>
  )
}

export default CloseIcon

CloseIcon.propTypes = {
  extraClasses: PropTypes.array
}
