import React from 'react'
import { NotificationBadge, NotificationWrapper } from './NotificationContainers';

export const Notification = ({children, number}) => {
    return (
        <NotificationWrapper>
            {children}
            <NotificationBadge>
                {number}
            </NotificationBadge>
        </NotificationWrapper>
    )
}   
