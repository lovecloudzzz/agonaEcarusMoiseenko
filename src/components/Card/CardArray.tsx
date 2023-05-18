import React from 'react';
import { Card, CardProps } from './Card';

interface CardArrayProps {
    cardData: CardProps[];
}

export const CardArray: React.FC<CardArrayProps> = ({ cardData }) => {
    return (
        <>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    brand={card.brand}
                    product={card.product}
                    category={card.category}
                    price={card.price}
                    imgLink={card.imgLink}
                />
            ))}
        </>
    );
};
