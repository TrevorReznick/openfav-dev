// File: src/components/Notifications.jsx
import { useEffect } from 'react'
import { Toaster, toast } from 'sonner'

export default function ({errorMessage}) {
    useEffect(() => {
        toast.error(errorMessage)
        /*
        const promise = () => new Promise((resolve, reject) => setTimeout(() => reject({ name: 'Sonner' }), 2000))
        toast.promise(promise, {
            loading: 'Loading...',
            success: (data) => {
                return `${errorMessage} toast has been added`
            },
            error: 'Error',
        })
        */
    }, [])
    
    return ( 
        <>
            <Toaster position="top-right" />
        </> 
    ) 
}