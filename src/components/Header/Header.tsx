import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {AuthForm} from "../AuthForm/AuthForm";
import styles from './Header.module.sass'
import currency from "../../assets/Currency.svg";
import avatar from "../../assets/Avatar.svg";
import pin from "../../assets/Pin.svg";
import logo from "../../assets/logo.svg";

export const Header = () => {

    const [modalAuth, setModalAuth] = useState(false)

    return (
        <nav className={styles.Header}>
            <div className={styles.HeaderRow}>
                <div>
                    <Link to="/home" className={styles.NoneDecoration}><img src={logo} /></Link>
                </div>
                <div>
                    <Link to="/home" className={styles.NoneDecoration}>Главная</Link>
                </div>
                <div>
                    <Link to="/points" className={styles.NoneDecoration}>Пункты сбора</Link>
                </div>
                <div>
                    <Link to="/market" className={styles.NoneDecoration}>Экомаркет</Link>
                </div>
                <div>
                    <Link to="/about" className={styles.NoneDecoration}>О сервисе</Link>
                </div>
            </div>
            <div className={styles.HeaderRow} onClick={() => setModalAuth(true)}>
                <div>
                    <a className={styles.HeaderLink}>
                        <img src={pin}/>
                        Казань
                    </a>
                </div>
                <div>
                    <Link to="/wallet" className={styles.NoneDecoration}>
                        <a className={styles.HeaderLink}>
                            <img src={currency}/>
                            1000
                        </a>
                    </Link>
                </div>
                <div>
                    <Link to="/profile" className={styles.NoneDecoration}>
                        <a className={styles.HeaderLink}>
                            <img src={avatar}/>
                            Алексей
                        </a>
                    </Link>
                </div>
            </div>
            <AuthForm modalAuth={modalAuth} closeModal={() => setModalAuth(false)}/>
        </nav>

    );
};