import React from 'react'
import style from './FormField.module.css'

const FormField = ({ field, type }) => {
    return (
        <div>
            <p>{field}</p>
            <input type={type || 'text'} />
        </div>
    )
}

export default FormField