import React from 'react'
import BodyLeft from './BodyLeft/BodyLeft'
import BodyMain from './BodyMain/BodyMain'
import './Body.scss'

const Body = props => (
    <div className="body">
        <BodyLeft />
        <BodyMain />
    </div>
)

export default Body