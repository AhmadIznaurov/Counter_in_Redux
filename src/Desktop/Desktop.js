import React from "react";
import s from './Desktop.module.css';
import Logotip from '../img/counter.png';

const Desktop = () => {
    return (
        <div className={s.desktop_wrapper}>
           <header className={s.header}>
               <div className={s.logo_counter}>
                   <img src={Logotip}/>
               </div>
               <ul className={s.header_ul_list}>
                   <li>Главная</li>
                   <li>О нас</li>
                   <li>Контакты</li>
               </ul>
           </header>
        </div>
    )
}

export default Desktop;