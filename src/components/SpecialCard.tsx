import React from 'react';
import {GreenButton} from "./GreenButton";
import '../styles/SpecialCard.sass'
import currency from "../assets/Currency.svg";

interface SpecialCardProps {
    title: string;
    subtitle: string;
    balance: string;
}

export const SpecialCard: React.FC<SpecialCardProps> = (props) => {
    return (
        <div className='SpecialCard'>
            <div className='SpecialCardTitle'>
                <div className='SpecialCardTitleCol'>
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
            <div className='SpecialCardBtn'>
                <GreenButton name={'Получить промокод'}/>
            </div>
        </div>
    );
};