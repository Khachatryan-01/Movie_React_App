import React from 'react'
import style from './FormField.module.css'

const FormField = React.forwardRef(({ field, type }, ref) => {
    return (
        <div className={style.formField}>
            <p className={style.text}>{field}</p>
            <input
                className={style.input}
                type={type || 'text'}
                ref={ref}
            />
        </div>
    )
})

export default FormField