function sendToCloud ({props, paho}) {
	let message = new Paho.MQTT.Message(JSON.stringify(props));
	message.destinationName = "Hazard";
				//paho.send(message);  //remove this comment when trying to talk to server 
	}

export default sendToCloud
