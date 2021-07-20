import React from 'react'

import { useQuery, } from "@apollo/client"

import queries from '../../queries/character.queries'

import AppbarComponent from '../../components/appbar/appbar.component'
import FooterComponent from '../../components/footer/footer.component'
import CharacterCardComponent from '../../components/character_card/character_card.component'
import HSpacerComponent from '../../components/h_spacer/h_spacer.component'

import './home.page.scss'

const HomePage = () => {
    const { loading, error, data } = useQuery(queries.GET_CHARACTERS)


    if( loading ) {
        return (
            <div>
                loading...
            </div>
        )
    }
    if( error ) {
        return (
            <div>
                error occured
            </div>
        )
    }
    console.log('data ', data.characters.results)
    const characters = data.characters.results
    return (
        <div>

            {/* app bar */}
            <AppbarComponent />
            <HSpacerComponent space={8} />

            {/* list of characters */}
            <div className="character_grid">
            {
                characters.map((character, i)=> {

                    return (
                        <CharacterCardComponent
                            key={i}
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
