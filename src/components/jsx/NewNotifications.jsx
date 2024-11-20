// src/components/Notifications.jsx
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';
import { messageStoreNew } from '~/store';
import { NotificationType } from '~/types'

export default function Notifications() {
    const [notification, setNotification] = useState<NotificationType>({
        active: '',
        message: '',
        type: 'default',
        position: 'top-center', 
        description: undefined,
        action: undefined,
    });

    useEffect(() => {
        const unsubscribe = messageStoreNew.subscribe(setNotification);
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (notification.active) {
            const toastOptions = {
                description: notification.description,
                action: notification.action,
            }

            switch (notification.type) {
                case 'success':
                    toast.success(notification.message, toastOptions);
                    break;
                case 'info':
                    toast.info(notification.message, toastOptions);
                    break;
                case 'warning':
                    toast.warning(notification.message, toastOptions);
                    break;
                case 'error':
                    toast.error(notification.message, toastOptions);
                    break;
                default:
                    toast(notification.message, toastOptions);
            }
            messageStoreNew.set({
                active: null,
                message: '',
                type: 'default',
                position: 'top-center',
                description: undefined,
                action: undefined,
            });
        }
    }, [notification])

    const position = typeof notification.position === 'string' ? notification.position : 'top-center'

    return (
        <>
            <Toaster position={notification.position} />
        </>
    );
}