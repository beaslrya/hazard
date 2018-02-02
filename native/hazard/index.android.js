/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {props} from 'cerebral/tags';
import {Container} from 'cerebral/react';
import {screen} from './controller';
import controller from './controller';
import App from './components/App';
import Open from './components/Open';

function Router(screen){
		if(screen.view === "main"){
					return (<Open />);
		}else {
					return (<App />);
		}
}

export default class hazard extends Component {
  render() {
    return (
			<Container controller={controller}>
				<Router />
			</Container>
    );
  }
}
AppRegistry.registerComponent('hazard', () => hazard);
