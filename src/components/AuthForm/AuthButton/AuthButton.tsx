import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import cns from 'classnames/bind';
import styles from './AuthButton.module.sass';

const cx = cns.bind(styles);

type AuthButtonProps = {
    color?: 'green' | 'gray';
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const AuthButton = ({ color, children, ...props }: AuthButtonProps) => {
    return (
        <button
            className={cx(styles.button, {
                buttonGreen: color === 'green',
                buttonGray: color === 'gray',
            })}
            {...props}
        >
            {children}
        </button>
    );
};
