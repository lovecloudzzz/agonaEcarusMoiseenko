import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthForm } from '../AuthForm/AuthForm';
import styles from './Header.module.sass';
import currency from '../../assets/Currency.svg';
import pin from '../../assets/Pin.svg';
import logo from '../../assets/logo.svg';

export const Header = () => {
    const [modalAuth, setModalAuth] = useState(false);

    return (
        <nav className={styles.Header}>
            <div className={styles.HeaderRow}>
                <div>
                    <Link to="/home" className={styles.NoneDecoration}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div>
                    <Link to="/home" className={styles.NoneDecoration}>
                        Главная
                    </Link>
                </div>
                <div>
                    <Link to="/points" className={styles.NoneDecoration}>
                        Пункты сбора
                    </Link>
                </div>
                <div>
                    <Link to="/market" className={styles.NoneDecoration}>
                        Экомаркет
                    </Link>
                </div>
                <div>
                    <Link to="/about" className={styles.NoneDecoration}>
                        О сервисе
                    </Link>
                </div>
            </div>
            <div className={styles.HeaderRow}>
                <div>
                    <a className={styles.HeaderLink}>
                        <img src={pin} alt="Pin" />
                        Казань
                    </a>
                </div>
                <div>
                    <a className={styles.HeaderLink}>
                        <Link to="/wallet" className={styles.NoneDecoration}>
                            <img src={currency} alt="Currency" />
                            1000
                        </Link>
                    </a>
                </div>
                <div>
                    <button onClick={() => setModalAuth(true)} className={styles.NoneDecoration}>
                        Войти
                    </button>
                </div>
            </div>
            <AuthForm modalAuth={modalAuth} closeModal={() => setModalAuth(false)} />
        </nav>
    );
};

export default Header;
