import React, { useState, useEffect } from 'react';
import './Notification.css';

export const Notification = ({ message }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!isVisible) {
        return null;
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '10px',
            left: '10px',
            backgroundColor: 'red',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            animation: 'slide-in 0.5s forwards'
        }}>
            <span>{message}</span>
        </div>
    );
};
