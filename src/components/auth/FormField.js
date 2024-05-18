import React from 'react'
import style from './FormField.module.css'

const FormField = ({ field, type }) => {
    return (
        <div className={style.formField}>
            <p className={style.text}>{field}</p>
            <input className={style.input} type={type || 'text'} />
        </div>
    )
}

export default FormField