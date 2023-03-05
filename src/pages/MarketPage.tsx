import React from 'react';
import {RoundedButton} from "../components/RoundedButton/RoundedButton";
import '../styles/MarketPage.sass'
import {CheckboxArray} from "../components/CheckboxArray/CheckboxArray";
import {SpecialCard} from "../components/SpecialCard/SpecialCard";
import {CardArray} from "../components/Card/CardArray";
import NikeAirMax2021 from "../assets/NikeAirMax2021.svg";

const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 4',
    'Option 4'];
const cardData = [
    {
        brand: 'NIKE',
        product: 'Nike Air Max 2021',
        category: 'Мужская обувь',
        price: 1000,
        imgLink: NikeAirMax2021
    },
    {
        brand: 'NIKE',
        product: 'Nike Air Max 2021',
        category: 'Мужская обувь',
        price: 1000,
        imgLink: NikeAirMax2021
    },
    {
        brand: 'NIKE',
        product: 'Nike Air Max 2021',
        category: 'Мужская обувь',
        price: 1000,
        imgLink: NikeAirMax2021
    },
    {
        brand: 'NIKE',
        product: 'Nike Air Max 2021',
        category: 'Мужская обувь',
        price: 1000,
        imgLink: NikeAirMax2021
    },

]

export const MarketPage = () => {
    return (
        <div className='MarketPage'>
            <div className='MarketPageHead'>
                <div className='MarketPageHeadTitle'>
                    ЭкоМаркет
                </div>
                <div className='MarketPageHeadBtns'>
                    <RoundedButton title={'По популярности'}/>
                    <RoundedButton title={'По цене'}/>
                    <RoundedButton title={'По новизне'}/>
                </div>
            </div>
            <div className='MarketPageContent'>
                <div className='MarketPageContentFilters'>
                    <CheckboxArray arrayTitle={'Пол'} options={options}/>
                    <CheckboxArray arrayTitle={'Тип товара'} options={options}/>
                    <CheckboxArray arrayTitle={'Брэнд'} options={options}/>
                    <RoundedButton title={'Сбросить фильтры'}/>
                </div>
                <div className='MarketPageContentCards'>
                    <SpecialCard title={'На вашем балансе'} subtitle={'Вы можете обменять их на скидку 200 руб.'} balance={'200'}/>
                    <CardArray cardData={cardData}/>
                </div>
            </div>
        </div>
    );
};