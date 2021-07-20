import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'


import './character_card.component.scss'

const CharacterCardComponent = ({ character }) => {
    return (
        <div className="character_card">
            <img 
                src={character.image} 
                alt={character.name}
                className="character_card__image"
            />

            <div className="character_card__content">
                <div className="character_card__content__name_wrap">
                    <h3>
                        {character.name}
                    </h3>
                    <div className={
                        clsx([
                            "character_card__content__name_wrap__status",
                            {
                                "character_card__content__name_wrap__status__dead": character.status != "Alive"
                            }
                        ])
                    }
                    />
                </div>
                <p>
                    {character.species}
                </p>
            </div>
        </div>
    )
}

CharacterCardComponent.propTypes = {
    character: PropTypes.object.isRequired,
}

export default CharacterCardComponent
