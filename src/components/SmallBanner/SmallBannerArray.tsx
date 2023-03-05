import React from 'react';
import { SmallBanner, SmallBannerProps } from './SmallBanner';
import styles from './SmallBannerArray.module.sass'

interface SmallBannerArrayProps {
    bannerData: SmallBannerProps[];
}

export const SmallBannerArray: React.FC<SmallBannerArrayProps> = ({ bannerData }) => {
    return (
        <div className={styles.SmallBannerArray}>
            {bannerData.map((data, index) => (
                <SmallBanner
                    key={index}
                    title={data.title}
                    subtitle={data.subtitle}
                    btnImgUrl={data.btnImgUrl}
                    imageUrl={data.imageUrl}
                />
            ))}
        </div>
    );
};
