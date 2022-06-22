import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonStyleType = 'primary' | 'outline_primary' | 'success' | 'outline_success'
    | 'danger' | 'outline_danger' | 'warning' | 'outline_warning'
    | 'dark' | 'outline_dark'
type ButtonSizeType = 'small' | 'medium' | 'large'

type SuperButtonPropsType = DefaultButtonPropsType & {
    btnStyle?: ButtonStyleType
    btnSize?: ButtonSizeType
    upperCase?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        className,
        btnStyle,
        btnSize,
        upperCase,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const size = btnSize || 'small'
    const style = `btn_${btnStyle}`
    const finalClassName = `${s.btn} ${btnStyle ? s[style] : ''} ${s[size]} ${(upperCase && s.upperCase) || ''} ${(className && className) || ''}`

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}


export default SuperButton
