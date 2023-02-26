import React from 'react';
import '../styles/Card.sass';
import currency from "../assets/Currency.svg";

export interface CardProps {
    brand: string;
    product: string;
    category: string;
    price: number;
    imgLink: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <div className="Card">
            <a className="CardHead">
                <span className="CardHeadBrand">{props.brand}</span>
                <img className="CardHeadImg" alt="" src={props.imgLink}/>
            </a>
            <a className="CardProduct">{props.product}</a>
            <a className="CardCategory">{props.category}</a>
            <span className="CardPrice">
                <img className="CardPriceImg" src={currency} alt=''/>
                <a>
                    {props.price}
                </a>
            </span>
        </div>
    );
};