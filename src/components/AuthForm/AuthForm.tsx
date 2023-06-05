import React, {  } from 'react';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './AuthForm.module.sass';
import { AuthInput } from './AuthInput/AuthInput';
import { AuthButton } from './AuthButton/AuthButton';
import { AuthLink } from './AuthLink/AuthLink';
import Exit from '../../assets/Exit.svg';

interface AuthFormProps {
    modalAuth: boolean;
    closeModal: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ modalAuth, closeModal }) => {
    const initialValues = {
        phone: '',
        password: '',
    };

    const validationSchema = Yup.object({
        phone: Yup.string().required('Phone is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = async (values: any) => {
        try {
            const response = await axios.post(
                'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/login',
                values
            );
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.error('Login error:', error);
            // Handle error
        }
    };

    return (
        <Modal
            isOpen={modalAuth}
            className={styles.Modal}
            overlayClassName={styles.overlay}
            onRequestClose={closeModal}
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={styles.Form}>
                    <div className={styles.FormHeader}>
                        <span className={styles.FormHeaderTitle}>Вход</span>
                        <img src={Exit} alt="Закрыть форму" onClick={closeModal} />
                    </div>
                    <div className={styles.FormMain}>
                        <div className={styles.FormMainInputs}>
                            <div className={styles.FormMainInputs}>
                                <Field
                                    type="text"
                                    name="phone"
                                    placeholder="Телефон"
                                    component={AuthInput}
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className={styles.error}
                                />
                            </div>
                            <div className={styles.FormMainInputs}>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Пароль"
                                    component={AuthInput}
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className={styles.error}
                                />
                            </div>
                        </div>
                        <div className={styles.FormFooter}>
                            <AuthButton type="submit" color="green">
                                Войти
                            </AuthButton>
                            <div className={styles.FormFooterButtons}>
                                <AuthLink>{'Войти с помощью смс'}</AuthLink>
                                <AuthLink>{'Регистрация'}</AuthLink>
                            </div>
                        </div>
                        <AuthButton color="gray">Вход для партнёров</AuthButton>
                    </div>
                </Form>
            </Formik>
        </Modal>
    );
};