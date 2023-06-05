import React from 'react';
import styles from './AuthLink.module.sass'

interface AuthLinkProps {
    onClick?: () => void;
    children: React.ReactNode;
}

export const AuthLink: React.FC<AuthLinkProps> = ({ onClick, children }) => {
    return (
        <button className={styles.AuthLink} onClick={onClick}>
            {children}
        </button>
    );
};
