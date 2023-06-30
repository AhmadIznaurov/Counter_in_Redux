import React from "react";
import f from './Footer.module.css';
import footCounter from '../img/Black_white_counter.png'

const Footer = () => {

    return (
        <footer className={f.footer}>
          <aside className={f.aside_footer}>
              <div className={f.footer_image}>
                  <img src={footCounter}/>
              </div>
              <ul className={f.footer_list}>
                  <li>Партнерам</li>
                  <li>Разработчикам</li>
                  <li>Вакансии</li>
              </ul>
          </aside>
            <div className={f.text_lincode}>“Lincode”, 2023г</div>
        </footer>
    )
};

export default Footer;