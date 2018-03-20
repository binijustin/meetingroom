import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul>
        <NavigationItem link="/dashboard" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/create-event">Orders</NavigationItem>
    </ul>
);

export default navigationItems;