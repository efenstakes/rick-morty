import React from 'react'
import PropTypes from 'prop-types'

const HSpacerComponent = ({ space=2 }) => {
    return <div style={{ marginTop: `${space*10}px` }} />
}

HSpacerComponent.propTypes = {
    space: PropTypes.number,
}

export default HSpacerComponent
