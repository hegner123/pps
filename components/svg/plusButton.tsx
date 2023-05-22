import PropTypes from 'prop-types'

const PlusButton = ({ extraClasses }:any) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={extraClasses?.join(' ')}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    </>
  )
}

export default PlusButton

PlusButton.propTypes = {
  extraClasses: PropTypes.array
}
