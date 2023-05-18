import React from 'react';
import styles from './Banner.module.sass'

interface BannerProps {
    bg: string;
    title: string;
    desc: string;
    img: string;
    btnText: string;
}
export const Banner: React.FC<BannerProps> = (props) => {
    return (
        <div className={styles.Banner} style={{background: props.bg}}>
            <div className={styles.BannerBody}>
                <a className={styles.BannerBodyHeader}>
                    <h1 className={styles.BannerBodyHeaderTitle}>
                        {props.title}
                    </h1>
                    <h2 className={styles.BannerBodyHeaderDesc}>
                        {props.desc}
                    </h2>
                </a>
                <button className={styles.BannerBodyBtn}> {props.btnText}</button>
            </div>
            <a className={styles.BannerImg}>
                <img alt={""} src={props.img}/></a>
        </div>
    );
};