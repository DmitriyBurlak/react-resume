import React from 'react'
import './Main.scss'

const Main = props => (
    <div className="Main">
        <div className="name">Дмитрий Бурлак</div> 

        <div className="item">

            <div className="item__row">
                <div className="label">День рождение:</div>
                <div className="labeled">10 июля 1988 г</div>
            </div>
            <div className="item__row">
                <div className="label">Город:</div>
                <div className="labeled">Москва</div>
            </div>

            <div className="item__row">
                <div className="label">Должность:</div>
                <div className="labeled">Junior front-end developer</div>
            </div>

            Время выполнения около: 4 часов
        </div> 

        <div className="item">
       
            <div className="item__title">
                Контакты
            </div> 


            <div className="item__row">
                <div className="label">Телефон:</div>
                <div className="labeled"><a href="tel:+79788106758" target="_blank">+7 (978) 810-67-58</a></div>
            </div>
            <div className="item__row">
                <div className="label">Telegram:</div>
                <div className="labeled">@DmShade</div>
            </div>
            <div className="item__row">
                <div className="label">Email:</div>
                <div className="labeled"><a href="mailto:dmshade25@gmail.com" target="_blank">dmshade25@gmail.com</a></div>
            </div>

        </div>

        <div className="item">
       
            <div className="item__title">
                Карьера
            </div> 


            <div className="item__row">
                <div className="label">Место работы:</div>
                <div className="labeled"><a href="https://toredo.ru/" target="_blank">Toredo</a><br/>
                    Июль 2020 — по настоящее время <br/>
                    (10 мес)
                </div>
            </div>
            <div className="item__row">
                <div className="label">Место работы:</div>
                <div className="labeled">Фриланс <br/>
                    Октябрь 2011 — март 2012 <br/>
                    (6 мес)
                </div>
            </div>
        </div> 

        <div className="item">
       
            <div className="item__title">
                Личная информация
            </div> 

            <div className="item__row">
                <div className="label">GitHub:</div>
                <div className="labeled"><a href="https://github.com/DmitriyBurlak" target="_blank">github.com/DmitriyBurlak</a>
                </div>
            </div>

            <div className="item__row">
                <div className="label">Ключевые навыки:</div>
                <div className="labeled">HTML, CSS, SCSS, Java Script, немного jQuery и PHP, webpack, начальные знания React и Vue (верстка, создание компонентов, небольшая логика, props), Работа с системой контроля версий Git;
                </div>
            </div>
            <div className="item__row">
                <div className="label">Опыт с CMS:</div>
                <div className="labeled">Wordpress, ModX, Bitrix, Joomla, OpenCart;</div>
            </div>

            <div className="item__row">
                <div className="label">Графические редакторы:</div>
                <div className="labeled">PhotoShop, Figma;</div>
            </div>

            <div className="item__row">
                <div className="label">О себе:</div>
                <div className="labeled">Огромное желание работать в команде и развиваться в направлении React;</div>
            </div>
        </div> 

        
    </div>
)

export default Main;


