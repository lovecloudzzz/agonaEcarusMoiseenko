import React, {ReactNode} from 'react';
import styles from './AuthLink.module.sass'

interface AuthLinkProps {
    children: ReactNode
}

export const AuthLink = ({children}: AuthLinkProps) => {
    return (
        <a className={styles.link} >
            {children}
        </a>
    );
};