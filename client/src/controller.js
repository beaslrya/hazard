import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'

import updatePosition from './signals/updatePosition'
import startFlasher from './signals/startFlasher'

const controller = Controller({
	devtools: Devtools({
		host: '127.0.0.1:8585'
	}),
	state: {
		position: {
			latitude: 100, 
			longitude: 100,
		},	
		flash: {
			on: true
		}
	},
	signals: {
		updatePosition,
		startFlasher
	}
});

const startFlasherSig = controller.getSignal('startFlasher');
startFlasherSig()

const updatePositionSig = controller.getSignal('updatePosition');

navigator.geolocation.watchPosition((pos) => {
	updatePositionSig({
		coords: {
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude
		},
		timestamp: pos.timestamp
	});
});

export default controller;
