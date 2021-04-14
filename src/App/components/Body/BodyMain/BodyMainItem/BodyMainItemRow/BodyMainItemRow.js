import React from 'react'
import './BodyMainItemRow.scss'

const BodyMainItemRow = props => (

    <div className="body__main__item__row">
        <div className="label">{props.label}</div>
        <div className="labeled">{props.labeled}</div>
    </div>
)

export default BodyMainItemRow
