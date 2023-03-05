import React from 'react';
import styles from "../AuthInput/AuthInput.module.sass";

interface AuthInputProps {
    placeholder: string
}

export const AuthInput = ({placeholder}: AuthInputProps) => {
    return (
        <input className={styles.input} placeholder={placeholder}/>
    );
};