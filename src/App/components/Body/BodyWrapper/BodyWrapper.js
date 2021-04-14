import React, {Component} from 'react'
import './BodyWrapper.scss'

class BodyWrapper extends Component {
    render() {
        return (
            <div className='body__wrapper'>
                {this.props.children}
            </div> 
        )
    }
}

export default BodyWrapper;