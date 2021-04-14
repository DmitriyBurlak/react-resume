import React from 'react'
import './Header.scss'

const Header = props => (
    <header className="Header"> 
        <div className="wrapper">
            <div className="Header__title">React-Resume</div>
            <div className="Header__logo">
                <div className="name">Дмитрий</div>
                <div className="logo"></div>
            </div>
           
        </div>
    </header>
)

export default Header;