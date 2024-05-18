import React from 'react'
import style from './Register.module.css'
import FormField from './FormField'

const RegisterPage = () => {
    return (
        <div className={style.body}>
            <div className={style.container}>
                <form>
                    <h2>Start Exploring Movies</h2>
                    <FormField field='Username' />
                    <FormField field='Birth Date' type='date' />
                    <FormField field='Password' type='password' />
                    <FormField field='Confirm password' type='password' />
                    <button>Register</button>
                    <a>Already have an accaunt?</a>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage