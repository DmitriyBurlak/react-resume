import React from 'react'
import BodyWrapper from '../BodyWrapper/BodyWrapper'
import BodyMainItem from './BodyMainItem/BodyMainItem'
import BodyMainItemRow from './BodyMainItem/BodyMainItemRow/BodyMainItemRow'
import BodyMainItemTitle from './BodyMainItem/BodyMainItemTitle/BodyMainItemTitle'
import ReactSpeedometer from "react-d3-speedometer"
import './BodyMain.scss'

const BodyMain = props => (
    <div className="body__main">
        <BodyWrapper>
            <div className="body__main__name">Dmitriy Burlak</div> 

            <BodyMainItem>
                <BodyMainItemRow label="Birthday party:" value="10 July's 1988 г"/>
                <BodyMainItemRow label="Town:" value="Moscow"/>
                <BodyMainItemRow label="Held post:" value="Junior front-end developer"/>
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Contacts" />
                <BodyMainItemRow label="Telephone:" value="+7 (978) 810-67-58" link="tel:+79788106758"/>
                <BodyMainItemRow label="Telegram:" value="@DmShade" link="https://tlgg.ru/DmShade" />
                <BodyMainItemRow label="E-mail:" value="dmshade25@gmail.com" link="mailto:dmshade25@gmail.com"/>
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Career" />
                <BodyMainItemRow label="Place of work:" value="«Toredo» July 2020 - present (10 months)" />
                <BodyMainItemRow label="Place of work:" value="Freelance October 2011-March 2012 (6 months)" />
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Personal information" />
                <BodyMainItemRow label="Key skills:" value="HTML, CSS, SCSS, JavaScript, a little jQuery and PHP, webpack, basic knowledge React and Vue, Working with the version control system Git;" />
                <BodyMainItemRow label="Experience with CMS:" value="Wordpress, ModX, Bitrix, Joomla, OpenCart;" />
                <BodyMainItemRow label="Graphic editors:" value="PhotoShop, Figma;" />
                <BodyMainItemRow label="GitHub:" value="github.com/DmitriyBurlak" link="https://github.com/DmitriyBurlak" />
                <BodyMainItemRow label="About me:" value="A great desire to work in a team and develop in the direction of React;" />
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Number of guests" />
                <ReactSpeedometer 
                    width={200}
                    maxValue={500}
                    value={150}
                    needleColor="red"
                    startColor="green"
                    segments={5}
                    endColor="orange"
                />
            </BodyMainItem>

        </BodyWrapper>

    </div>
)

export default BodyMain