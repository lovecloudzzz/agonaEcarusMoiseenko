import React from 'react';
import styles from './RoundedButton.module.sass'

type RoundedButton = {
    title: string;
};

export const RoundedButton: React.FC<RoundedButton> = ({title}) => {
    return (
        <button className={styles.RoundedButton}>{title}</button>
    );
};
