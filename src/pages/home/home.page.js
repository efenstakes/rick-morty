import React from 'react'

import { useQuery, } from "@apollo/client"

import queries from '../../queries/character.queries'

import AppbarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import CharacterCardComponent from '../../components/character_card/character_card.component'
import HSpacerComponent from '../../components/h_spacer/h_spacer.component'
import LoadingCharacterCardComponent from '../../components/loading_character_card/loading_character_card.component'

import './home.page.scss'

const HomePage = () => {
    const { loading, error, data } = useQuery(queries.GET_CHARACTERS)



    if( error ) {
        return (
            <div style={{}}>
                error occured
            </div>
        )
    }
    const characters = data && data.characters.results ? data.characters.results : null
    return (
        <div>

            {/* app bar */}
            <AppbarComponent />
            <HSpacerComponent space={8} />
            
            {/* list of characters */}
            <div className="character_grid">
                {
                    loading &&
                        [1, 2, 3, 4, 5, 6, 7].map((num)=> {

                            return (
                                <LoadingCharacterCardComponent key={num} />
                            )
                        })
                }
                {
                    characters &&
                        characters.map((character, _i)=> {

                            return (
                                <CharacterCardComponent
                                    key={character.id}
                                    character={character}
                                />
                            )
                        })
                }
            </div>
            <HSpacerComponent space={4} />

            {/* footer */}
            <FooterComponent />
        </div>
    )
}

export default HomePage
