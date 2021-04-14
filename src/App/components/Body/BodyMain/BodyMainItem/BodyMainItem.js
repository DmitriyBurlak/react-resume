import React, { Component } from 'react'
import './BodyMainItem.scss'

class BodyMainItem extends Component {
    render() {
        return (
            <div className="body__main__item">
                {this.props.children}
            </div>
        )
    }
}

export default BodyMainItem;


