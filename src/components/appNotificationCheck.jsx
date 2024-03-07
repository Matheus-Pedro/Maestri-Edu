import React from 'react';
import { Navbar } from './navbar';
import NotificationCheck from './notificationCheck';
import { useParams } from 'react-router-dom'


function AppNotificationCheck(){

    return (
        <div>
            <Navbar />
            <NotificationCheck />
        </div>
    );
};

export default AppNotificationCheck;
