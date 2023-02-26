import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface LoginFormProps {
    onLogin: (phone: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin(phone, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Вход</legend>
                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Телефон"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Войти</button>
                <ul>
                    <li>
                        <Link to="/Home">Войти с помощью смс</Link>
                    </li>
                    <li>
                        <Link to="/Home">Регистрация</Link>
                    </li>
                </ul>
                <button type="button">Вход для партнеров</button>
            </fieldset>
        </form>
    );
};