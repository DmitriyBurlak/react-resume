import React from 'react'
import './Header.scss'

const Header = props => (
    <header className="header"> 
        <div className="wrapper">
            <div className="header__title">React-Resume</div>
            <div className="header__logo">
                <div className="name">Dmitriy</div>
                <div className="logo"></div>
            </div>
           
        </div>
    </header>
)

export default Header;