import React, { Component } from 'react'
import Body from '../../components/Body/Body';
import SideBar from '../../components/SideBar/SideBar';
import './Page.scss'

class Page extends Component {
    constructor(props){
        super(props);
          
    }

    render() {
        return (
            <div className="Page">
                <div className="wrapper">
                    <SideBar/>
                    <Body />
                </div>
            </div>
        )
    }
}

export default Page

