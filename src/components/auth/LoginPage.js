import React, { useContext, useEffect, useRef } from 'react'
import FormField from './FormField'
import authStyle from './Auth.module.css'
import style from './LoginPage.module.css'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/auth-context';



const VALID_COLOR = 'transparent';
const INVALID_COLOR = 'red';

const LoginPage = () => {

    const authCtx = useContext(AuthContext);

    const userNameRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        if (authCtx.activeUser) {
            window.location.href = '/movies';
        }
    }, [authCtx.activeUser]);


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

                            //
                            // const users = JSON.parse(localStorage.getItem('users')); 
                            // const user = users.find((user) => user.userName === userName && user.password === password);
                            //
                            const isLoggedIn = authCtx.loginUser(userName, password)

                            const color = isLoggedIn ? VALID_COLOR : INVALID_COLOR;
                            userNameRef.current.style.borderColor = color;
                            passwordRef.current.style.borderColor = color;
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