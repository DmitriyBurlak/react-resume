import React from 'react'
import './BodyMainItemRow.scss'

const BodyMainItemRow = props => (

    <div className="body__main__item__row">
        <div className="label">{props.label}</div>

        {props.link 
            ? <div className="value"><a href={`${props.link}`} target="_blank">{props.value}</a></div>
            : <div className="value">{props.value}</div>
        }

    </div>
)

export default BodyMainItemRow
