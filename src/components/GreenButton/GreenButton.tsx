import React from "react";
import styles from './GreenButton.module.sass'


interface ButtonProps {
    name: string;
}
export const GreenButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className={styles.GreenButton}>
            {props.name}
        </button>
    );
};