import React from 'react';
import '../styles/SmallBanner.sass';

export interface SmallBannerProps {
    title: string;
    subtitle: string;
    btnImgUrl: string;
    imageUrl: string;
}

export const SmallBanner: React.FC<SmallBannerProps> = (props) => {
    return (
        <div className="SmallBanner">
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
                <button>
                    <img src={props.btnImgUrl} alt="arrow" />
                </button>
            </div>
            <div>
                <img src={props.imageUrl} alt="Small Banner" className="SmallBannerImg" />
            </div>
        </div>
    );
};