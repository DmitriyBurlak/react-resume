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
            <div className="body__main__name">Дмитрий Бурлак</div> 

            <BodyMainItem>
                <BodyMainItemRow label="День рождение:" labeled="10 июля 1988 г"/>
                <BodyMainItemRow label="Город:" labeled="Москва"/>
                <BodyMainItemRow label="Должность:" labeled="Junior front-end developer"/>
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Контакты" />
                <BodyMainItemRow label="Телефон:" labeled="+7 (978) 810-67-58" />
                <BodyMainItemRow label="Telegram:" labeled="@DmShade"/>
                <BodyMainItemRow label="Email:" labeled="dmshade25@gmail.com"/>
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Карьера" />
                <BodyMainItemRow label="Место работы:" labeled="Toredo.ru Июль 2020 — по настоящее время (10 мес)" />
                <BodyMainItemRow label="Место работы:" labeled="Фриланс Октябрь 2011 — март 2012 (6 мес)" />
            </BodyMainItem>

            <BodyMainItem>
                <BodyMainItemTitle text="Личная информация" />
                <BodyMainItemRow label="Ключевые навыки:" labeled="HTML, CSS, SCSS, JavaScript, немного jQuery и PHP, webpack, начальные знания React и Vue, Работа с системой контроля версий Git;" />
                <BodyMainItemRow label="Опыт с CMS:" labeled="Wordpress, ModX, Bitrix, Joomla, OpenCart;" />
                <BodyMainItemRow label="Графические редакторы:" labeled="PhotoShop, Figma;" />
                <BodyMainItemRow label="GitHub:" labeled="https://github.com/DmitriyBurlak" />
                <BodyMainItemRow label="О себе:" labeled="Огромное желание работать в команде и развиваться в направлении React;" />
            </BodyMainItem>

            <BodyMainItem>
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