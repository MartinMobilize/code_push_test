import { Navigation } from 'react-native-navigation';

import Drawer from './Drawer';
import Group from './group/Group';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.NavigationDrawer', () => Drawer, store, Provider);
	Navigation.registerComponent('app.Group', () => Group, store, Provider);
}