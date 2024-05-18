import React from 'react'
import authStyle from './Auth.module.css'
import FormField from './FormField'
import style from './Register.module.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    return (
        <div className={authStyle.body}>
            <div className={authStyle.container}>
                <form  className={`${authStyle.form} ${style.form}`}>
                    <h2 className={authStyle.title}>Start Exploring Movies</h2>
                    <FormField field='Username' />
                    <FormField field='Birth Date' type='date' />
                    <FormField field='Password' type='password' />
                    <FormField field='Confirm password' type='password' />
                    <button className={authStyle.button}>Register</button>
                    <Link to='/login' className={authStyle.link}>Already have an account?</Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage