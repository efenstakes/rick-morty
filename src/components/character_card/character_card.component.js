import React from 'react'
import PropTypes from 'prop-types'


import './character_card.component.scss'

const CharacterCardComponent = ({ character }) => {
    return (
        <div className="character_card">
            { character.name }
        </div>
    )
}

CharacterCardComponent.propTypes = {
    character: PropTypes.object.isRequired,
}

export default CharacterCardComponent
