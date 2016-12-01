import { Navigation } from 'react-native-navigation';

import NavigationDrawer from './navigationDrawer/NavigationDrawer';
import Group from './group/Group';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.NavigationDrawer', () => NavigationDrawer, store, Provider);
	Navigation.registerComponent('app.Group', () => Group, store, Provider);
}