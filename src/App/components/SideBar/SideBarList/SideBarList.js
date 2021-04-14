import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import './SideBarList.scss'

const SideBarList = props => (
    <ul className="side-bar__list">
        <li>
            <FontAwesomeIcon className="icon" icon="user-circle" /> 
            My resume
        </li>
    </ul>
)

export default SideBarList

