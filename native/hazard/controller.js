import {Controller, provide} from 'cerebral'
import Devtools from 'cerebral/devtools'

import updatePosition from './signals/updatePosition'
import startFlasher from './signals/startFlasher'
import screenDisplay from './signals/screenDisplay'
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
import './libs/mqttws31.js'

global.localStorage = new Storage({storageBackend: AsyncStorage});

client = new Paho.MQTT.Client('ee256lnx1.ecn.purdue.edu', Number(8000), "client1");

client.connect({useSSL: false,
		onFailure: console.log
	});


const controller = Controller({
	devtools: Devtools({
		host: '10.0.2.2:8585',
		reconnent: true
	}),
	state: {
		screen: {
			view: "main"
		},
		position: {
			latitude: 40.5768, 
			longitude: -86.98777,
			altitude: 0,
			heading: 0,
			speed: 0,
		},	
		flash: {
			on: true
		}
	},
	signals: {
		updatePosition,
		startFlasher,
		screenDisplay
	},
	providers: [
		provide('paho', client)
	]
});


const startFlasherSig = controller.getSignal('startFlasher');
startFlasherSig()

const updatePositionSig = controller.getSignal('updatePosition');

const updateScreenVal = controller.getSignal('screenDisplay');

navigator.geolocation.watchPosition((pos) => {
	updatePositionSig({
		coords: {
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude,
			altitude: pos.coords.altitude,
			heading: pos.coords.heading,
			speed: pos.coords.speed,
		},
		timestamp: pos.timestamp
	});
});


export default controller;
