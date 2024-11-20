// src/components/NotificationButtons.jsx
import React from 'react';
import { messageStore } from '~/store'

export default function NotificationButtons() {
    const triggerDefaultNotification = () => {
        messageStore.set({
            active: true,
            message: 'Event has been created',
            type: 'default',
            position: 'top-center',
        });
    };

    const triggerSuccessNotification = () => {
        messageStore.set({
            active: true,
            message: 'Event has been created',
            type: 'success',
            position: 'top-center',
            description: 'Monday, January 3rd at 6:00pm',
        });
    };

    const triggerInfoNotification = () => {
        messageStore.set({
            active: true,
            message: 'Be at the area 10 minutes before the event time',
            type: 'info',
            position: 'top-center',
        });
    };

    const triggerWarningNotification = () => {
        messageStore.set({
            active: true,
            message: 'Event start time cannot be earlier than 8am',
            type: 'warning',
            position: 'top-center',
        });
    };

    const triggerErrorNotification = () => {
        messageStore.set({
            active: true,
            message: 'Event has not been created',
            type: 'error',
            position: 'top-center',
        });
    };

    const triggerActionNotification = () => {
        messageStore.set({
            active: true,
            message: 'Event has been created',
            type: 'default',
            position: 'top-center',
            action: {
                label: 'Undo',
                onClick: () => console.log('Undo'),
            },
        });
    };

    return (
        <>
            <button onClick={triggerDefaultNotification}>Mostra Notifica Default</button>
            <button onClick={triggerSuccessNotification}>Mostra Notifica Success</button>
            <button onClick={triggerInfoNotification}>Mostra Notifica Info</button>
            <button onClick={triggerWarningNotification}>Mostra Notifica Warning</button>
            <button onClick={triggerErrorNotification}>Mostra Notifica Error</button>
            <button onClick={triggerActionNotification}>Mostra Notifica con Azione</button>
        </>
    )
}