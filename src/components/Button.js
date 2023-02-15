import React from 'react'
import { Icons } from './Icons/Icons';

export const Button = ({title, icon}) => {
    return (
        <button>
            <span>{title}</span>
            {icon && <Icons type={icon}/>}
        </button>
    )
}