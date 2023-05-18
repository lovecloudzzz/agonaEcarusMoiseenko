import styles from './/AuthForm.module.sass';
import Modal from 'react-modal';
import {AuthInput} from "./AuthInput/AuthInput";
import {AuthButton} from "./AuthButton/AuthButton";
import {AuthLink} from "./AuthLink/AuthLink";
import Exit from '../../assets/Exit.svg'


interface AuthFormProps {
    modalAuth: boolean
    closeModal: () => void
}

export const AuthForm = ({modalAuth, closeModal}: AuthFormProps) => {
    return (
        <Modal
            isOpen={modalAuth}
            className={styles.Modal}
            overlayClassName={styles.overlay}
            onRequestClose={closeModal}
        >
            <form className={styles.Form}>
                <div className={styles.FormHeader}>
                    <span className={styles.FormHeaderTitle}>Вход</span>
                    <img src={Exit} alt="Закрыть форму" onClick={closeModal}/>
                </div>
                <div className={styles.FormMain}>
                    <div className={styles.FormMainInputs}>
                        <AuthInput placeholder={'Телефон'}/>
                        <AuthInput placeholder={'Пароль'}/>
                    </div>
                    <div className={styles.FormFooter}>
                        <AuthButton color={"green"}>Войти</AuthButton>
                        <div className={styles.FormFooterButtons}>
                            <AuthLink>{'Войти с помощью смс'}</AuthLink>
                            <AuthLink>{'Регистрация'}</AuthLink>
                        </div>
                    </div>
                    <AuthButton color={"gray"}> Вход для партнёров</AuthButton>
                </div>
            </form>
        </Modal>
    );
};