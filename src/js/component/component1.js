import React from 'react'

import PropTypes from 'prop-types'

import '../../styles/component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <video
        src={props.videoSrc}
        loop
        muted
        // poster="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
        preload="auto"
        autoPlay
        playsInline
        // className="component1-video accordion"
      ></video>
    </div>
  )
}

Component1.defaultProps = {
  videoSrc: "../../image/Komorebi.mp4",
  rootClassName: '',
}

Component1.propTypes = {
  videoSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Component1

