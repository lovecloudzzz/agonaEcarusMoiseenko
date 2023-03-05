import React from 'react';
import {GreenButton} from "../GreenButton/GreenButton";
import styles from './SpecialCard.module.sass'
import currency from "../../assets/Currency.svg";

interface SpecialCardProps {
    title: string;
    subtitle: string;
    balance: string;
}

export const SpecialCard: React.FC<SpecialCardProps> = (props) => {
    return (
        <div className={styles.SpecialCard}>
            <div className={styles.SpecialCardTitle}>
                <div className={styles.SpecialCardTitleCol}>
                    <a>
                        {props.title}
                    </a>
                    <a>
                        <img src={currency}/>
                        {props.balance}
                    </a>
                </div>
                <a>
                    {props.subtitle}
                </a>
            </div>
            <div className={styles.SpecialCardBtn}>
                <GreenButton name={'Получить промокод'}/>
            </div>
        </div>
    );
};