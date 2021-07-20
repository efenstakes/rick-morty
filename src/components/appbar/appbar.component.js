import React from 'react'
import { Link } from 'react-router-dom'

import { IoPlayCircleSharp } from 'react-icons/io5'

import './appbar.component.scss'

const AppbarComponent = () => {
    return (
        <div className="appbar">

            <Link className="app_link" to="/">
                <h3 className="appbar__logo">
                    ROMYS
                </h3>
            </Link>
            
            <div>
                <IoPlayCircleSharp  className="appbar__icon" />
            </div>
        </div>
    )
}

export default AppbarComponent
