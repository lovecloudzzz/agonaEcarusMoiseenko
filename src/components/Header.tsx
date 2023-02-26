import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.sass'
import currency from "../assets/Currency.svg";
import avatar from "../assets/Avatar.svg";
import pin from "../assets/Pin.svg";


export const Header = () => {
    return (
        <nav className='Header'>
            <div className='HeaderRow'>
                <div>
                    <Link to="/home" className='NoneDecoration'><img src="images/logo.svg" /></Link>
                </div>
                <div>
                    <Link to="/home" className='NoneDecoration'>Главная</Link>
                </div>
                <div>
                    <Link to="/points" className='NoneDecoration'>Пункты сбора</Link>
                </div>
                <div>
                    <Link to="/market" className='NoneDecoration'>Экомаркет</Link>
                </div>
                <div>
                    <Link to="/about" className='NoneDecoration'>О сервисе</Link>
                </div>
            </div>
            <div className='HeaderRow'>
                <div>
                    <a className='HeaderLink'>
                        <img src={pin}/>
                        Казань
                    </a>
                </div>
                <div>
                    <Link to="/wallet" className='NoneDecoration'>
                        <a className='HeaderLink'>
                            <img src={currency}/>
                            1000
                        </a>
                    </Link>
                </div>
                <div>
                    <Link to="/profile" className='NoneDecoration'>
                        <a className='HeaderLink'>
                            <img src={avatar}/>
                            Алексей
                        </a>
                    </Link>
                </div>
            </div>
        </nav>

    );
};