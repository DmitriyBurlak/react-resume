import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import './SideBarList.scss'

const SideBarList = props => (
    <ul className="side-bar__list">
        <li>
            <FontAwesomeIcon className="icon" icon="user-circle" /> 
            Моё резюме
        </li>
    </ul>
)

export default SideBarList

