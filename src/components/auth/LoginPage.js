import React from 'react'
import FormField from './FormField'
import authStyle from './Auth.module.css'
import style from './LoginPage.module.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
      <div className={authStyle.body}>
          <div className={authStyle.container}>
              <form className={`${authStyle.form} ${style.form}`}>
                  <h2 className={authStyle.title}>Welcome Back!</h2>
                  <FormField field='Username' />
                  <FormField field='Password' type='password' />
                  <button className={authStyle.button}>Log in</button>
                  <Link to='/register' className={authStyle.link}>Don't have an account?</Link>
              </form>
          </div>
      </div>
  )
}

export default LoginPage