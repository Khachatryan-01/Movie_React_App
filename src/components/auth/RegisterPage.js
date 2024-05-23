import React, { useEffect, useRef } from 'react'
import authStyle from './Auth.module.css'
import FormField from './FormField'
import style from './Register.module.css'
import { Link } from 'react-router-dom'

const VALID_COLOR = 'transparent';
const INVALID_COLOR = 'red';
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

const RegisterPage = () => {

    const userNameRef = useRef();
    const birthRef = useRef();
    const passwordRef = useRef();
    const confPassRef = useRef();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');

        if (isLoggedIn) {
            window.location.href = 'http://localhost:3000';
        }
    }, []);

    return (
        <div className={authStyle.body}>
            <div className={authStyle.container}>
                <form className={`${authStyle.form} ${style.form}`}>
                    <h2 className={authStyle.title}>Start Exploring Movies</h2>
                    <FormField field='Username' ref={userNameRef} />
                    <FormField field='Birth Date' ref={birthRef} type='date' />
                    <FormField field='Password' ref={passwordRef} type='password' />
                    <FormField field='Confirm password' ref={confPassRef} type='password' />
                    <button
                        className={authStyle.button}
                        onClick={(e) => {
                            e.preventDefault();

                            const userName = userNameRef.current.value,
                                birthDate = birthRef.current.value,
                                password = passwordRef.current.value,
                                confPass = confPassRef.current.value;

                            const users = JSON.parse(localStorage.getItem('users')) || [];
                            const newUser = {
                                id: users.length + 1,
                                userName,
                                birthDate,
                                password
                            };

                            let isValidName = true;
                            for (const item of users) {
                                if (item.userName === newUser.userName) {
                                    isValidName = false;

                                    break;
                                }
                            }
                            userNameRef.current.style.borderColor = isValidName ? VALID_COLOR : INVALID_COLOR;

                            const birthDateObj = new Date(birthDate);
                            const date = new Date();
                            date.setFullYear(date.getFullYear() - 6);

                            const isValidDate = birthDateObj <= date;
                            birthRef.current.style.borderColor = isValidDate ? VALID_COLOR : INVALID_COLOR;

                            const isValidPass = password === confPass && PASSWORD_REGEX.test(password);
                            const color = isValidPass ? VALID_COLOR : INVALID_COLOR;

                            passwordRef.current.style.borderColor = color;
                            confPassRef.current.style.borderColor = color;

                            if (!isValidPass || !isValidName || !isValidDate) {
                                return;
                            }

                            users.push(newUser);
                            localStorage.setItem('users', JSON.stringify(users));
                            sessionStorage.setItem('isLoggedIn', true);
                            window.location.href = 'http://localhost:3000/';
                        }}>
                        Register
                    </button>
                    <Link to='/login' className={authStyle.link}>Already have an account?</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage