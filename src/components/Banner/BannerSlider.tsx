import React, { useState } from 'react';
import recycling from "../../assets/recycling.svg";
import garbage from "../../assets/garbage.svg";
import left from "../../assets/Left.svg";
import masks from "../../assets/masks.svg";
import right from "../../assets/Right.svg";
import {Banner} from "./Banner";
import styles from './BannerSlider.module.sass'


export const BannerSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const banners = [
        {
            title: "Сделаем мир чище",
            desc: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов",
            btnText: "Условия сервиса",
            img: recycling,
            bg: "#B3EDC8"
        },
        {
            title: "А вы знали...",
            desc: "что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов от 100 до 200 лет? ",
            btnText: "Узнать больше",
            img: garbage,
            bg: "#FFE48F"
        },
        {
            title: "Что с масками?",
            desc: "Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.",
            btnText: "Пункты сбора масок",
            img: masks,
            bg: "#BFF0DE"
        }
    ]

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? banners.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === banners.length - 1 ? 0 : activeIndex + 1);
    };

    const currentBanner = banners[activeIndex];

    return (
        <div className={styles.Slider}>
            <button className={styles.Btn} onClick={handlePrevClick}> <img src={left}/> </button>
            <Banner bg={currentBanner.bg} title={currentBanner.title} desc={currentBanner.desc} img={currentBanner.img }  btnText={currentBanner.btnText}/>
            <button className={styles.Btn} onClick={handleNextClick}> <img src={right}/></button>
        </div>
    );
};
