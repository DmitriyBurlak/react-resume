import React from 'react';
import './Body.scss';
import BodyLeft from './BodyLeft/BodyLeft';
import BodyMain from './BodyMain/BodyMain';

const Body = props => (
    <div className="Body">
        <BodyLeft />
        <BodyMain />
    </div>
)

export default Body;