import React from 'react'
import BodyWrapper from '../BodyWrapper/BodyWrapper'
import ReactSpeedometer from "react-d3-speedometer"
import './BodyLeft.scss'

const BodyLeft = props => (
    <div className="body__left">
        <BodyWrapper>
            <div className="body__images">
                <img className="page_avatar_img" src="https://sun1-30.userapi.com/s/v1/if2/Y3Bys9l5EwGcjDq5ufYKY70FvmcADZuEScpvtlS5ViyD6e2w7PJMVSxUdEFiTl95MSpCcla9h8Quy2Ugfp4_sK9u.jpg?size=200x0&amp;quality=96&amp;crop=0,0,1604,2160&amp;ava=1" alt="Дмитрий  Shade" width="200" height="269"></img>
            </div>
        </BodyWrapper>
    </div>
)

export default BodyLeft;