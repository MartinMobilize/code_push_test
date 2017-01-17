import { Navigation } from 'react-native-navigation';

import NavigationDrawer     from './navigationDrawer/NavigationDrawer';
import GroupContainer       from './group/GroupContainer';
import PollItemDetail  	    from './feed/Poll/PollItemDetail'
import EmailBlastItemDetail from './feed/EmailBlast/EmailBlastItemDetail'


export function registerScreens(store, Provider) {
	Navigation.registerComponent('app.NavigationDrawer', () => NavigationDrawer, store, Provider);
	Navigation.registerComponent('app.Group', () => GroupContainer, store, Provider);
    Navigation.registerComponent('app.PollItemDetail', () => PollItemDetail);
    Navigation.registerComponent('app.EmailBlastItemDetail', () => EmailBlastItemDetail);

}