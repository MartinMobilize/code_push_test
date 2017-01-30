/**
 * @flow
 */
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './store/configureStore'
import { fetchUserState } from './reducers/currentUser/actions'
import { Provider } from "react-redux";
import codePush from "react-native-code-push";

const store = configureStore();
registerScreens(store, Provider);


class App extends Component {
	constructor(props) {
		super(props);
        store.dispatch(fetchUserState());
        require('./strings/index');
        this.startApp();
	}

	startApp() {
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'app.Group', // unique ID registered with Navigation.registerScreen
                navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
                navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            },
            drawer: { // optional, add this  if you want a side menu drawer in your app
                left: { // optional, define if you want a drawer from the left
                    screen: 'app.NavigationDrawer' // unique ID registered with Navigation.registerScreenת
                }
            },
            passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
            animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
        });
	}
}
//App = codePush(App);

export default App;