import React from 'react'

import { useQuery, } from "@apollo/client"

import queries from '../../queries/character.queries'

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
    console.log('data ', data)
    return (
        <div>

            {/* app bar */}


            {/* list of characters */}


            {/* footer */}
            
        </div>
    )
}

export default HomePage
