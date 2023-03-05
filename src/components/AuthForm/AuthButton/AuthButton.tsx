import React, {ReactNode} from 'react';
import cns from 'classnames/bind';
import styles from './AuthButton.module.sass'

const cx = cns.bind(styles)
type AuthButtonProps = {
    color?: "green" | "gray";
    children: ReactNode;
}

export const AuthButton = ({color, children}: AuthButtonProps) => {
    return (
        <button className={cx(styles.button, {
            buttonGreen: color === 'green',
            buttonGray: color === 'gray'
        })}
        >
            {children}
        </button>
    );
};