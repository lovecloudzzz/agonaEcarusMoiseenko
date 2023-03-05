import React from 'react';
import {SmallBannerArray} from "../components/SmallBanner/SmallBannerArray";
import '../styles/HomePage.sass'
import {BannersSlider} from "../components/Banner/BannersSlider";

const bannerData = [
    {
        title: 'Пункты сбора',
        subtitle: 'Посмотри, где в твоем городе можно сдать вторсырье на переработку',
        btnImgUrl: '/images/arrow.svg',
        imageUrl: '/images/map.svg',
    },
    {
        title: 'ЭкоМаркет',
        subtitle: 'Используй заработанные экокоины для покупки товаров из переработанных материалов ',
        btnImgUrl: '/images/arrow.svg',
        imageUrl: '/images/market.svg',
    }
];

export const HomePage: React.FC = () => {
    return (
        <div className="HomePage">
            <div>
                <BannersSlider/>
            </div>
            <SmallBannerArray bannerData={bannerData}/>
        </div>
    );
};