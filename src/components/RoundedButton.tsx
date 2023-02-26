import React from 'react';
import '../styles/RoundedButton.sass'

type RoundedButton = {
    title: string;
};

export const RoundedButton: React.FC<RoundedButton> = ({title}) => {
    return (
        <button className="RoundedButton">{title}</button>
    );
};
