import { Navigation } from 'react-native-navigation';

import NavigationDrawer from './navigationDrawer/NavigationDrawer';
import GroupContainer from './group/GroupContainer';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.NavigationDrawer', () => NavigationDrawer, store, Provider);
	Navigation.registerComponent('app.Group', () => GroupContainer, store, Provider);
}