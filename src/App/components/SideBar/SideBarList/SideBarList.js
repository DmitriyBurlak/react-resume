import React from 'react';
import './SideBarList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/js/solid'


const SideBarList = props => (
    <ul className="SideBarList">
        <li>
            <FontAwesomeIcon className="icon" icon="user-circle" /> 
            Моё резюме
        </li>
        
        
    </ul>
)

export default SideBarList;

