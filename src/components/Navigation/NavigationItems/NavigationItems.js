import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/" exact>Dashboard</NavigationItem>
        <NavigationItem link="/manage-event">Events</NavigationItem>
        <NavigationItem link="/logout">Logout</NavigationItem>
    </ul>
);

export default navigationItems;