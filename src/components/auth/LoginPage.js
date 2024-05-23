import React, { useEffect, useRef } from 'react'
import FormField from './FormField'
import authStyle from './Auth.module.css'
import style from './LoginPage.module.css'
import { Link } from 'react-router-dom'


const VALID_COLOR = 'transparent';
const INVALID_COLOR = 'red';

const LoginPage = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

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
                    <h2 className={authStyle.title}>Welcome Back!</h2>
                    <FormField field='Username' ref={userNameRef} />
                    <FormField field='Password' ref={passwordRef} type='password' />
                    <button
                        className={authStyle.button}
                        onClick={(e) => {
                            e.preventDefault()

                            const userName = userNameRef.current.value;
                            const password = passwordRef.current.value;

                            const users = JSON.parse(localStorage.getItem('users'));

                            const isValid = users.some((user) => user.userName === userName && user.password === password);

                            const color = isValid ? VALID_COLOR : INVALID_COLOR;
                            userNameRef.current.style.borderColor = color;
                            passwordRef.current.style.borderColor = color;

                            if (isValid) {
                                sessionStorage.setItem('isLoggedIn', true);
                                window.location.href = 'http://localhost:3000/';
                            }
                        }}
                    >
                        Log in
                    </button>
                    <Link to='/register' className={authStyle.link}>Don't have an account?</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginPage