import React from 'react';
import { MenuBar, MenuBarFull } from './MenuBar'

export default {
    title: 'Menu/Bar',
    component: MenuBar,
}

export const Primary = <MenuBar primary></MenuBar>
export const Secondary = <MenuBarFull secondary></MenuBarFull>