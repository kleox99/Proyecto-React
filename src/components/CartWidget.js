import React from 'react'
import { Notification } from './Notification/Notification';
import {Icons} from './Icons/Icons'


export const CartWidget = ({number}) => {
    return (
        <Notification number={number}>
            <Icons type={"cart"}/>
        </Notification>
    )
}
