import React from 'react';
import styles from './Card.module.sass';
import currency from "../../assets/Currency.svg";

export interface CardProps {
    brand: string;
    product: string;
    category: string;
    price: number;
    imgLink: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={styles.Card}>
            <a className={styles.CardHead}>
                <span className={styles.CardHeadBrand}>{props.brand}</span>
                <img className={styles.CardHeadImg} alt="" src={props.imgLink}/>
            </a>
            <a className={styles.CardProduct}>{props.product}</a>
            <a className={styles.CardCategory}>{props.category}</a>
            <span className={styles.CardPrice}>
                <img className={styles.CardPriceImg} src={currency} alt=''/>
                <a>
                    {props.price}
                </a>
            </span>
        </div>
    );
};