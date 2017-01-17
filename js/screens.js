import { Navigation } from 'react-native-navigation';

import NavigationDrawer from './navigationDrawer/NavigationDrawer';
import GroupContainer from './group/GroupContainer';
import FilesScreen from './group/Files'


export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.NavigationDrawer', () => NavigationDrawer, store, Provider);
	Navigation.registerComponent('app.Group', () => GroupContainer, store, Provider);
    Navigation.registerComponent('example.PushedScreen', () => FilesScreen);

}