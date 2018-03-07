import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'
import {StyleSheet, View, Text, Image} from 'react-native'
import Flash from '../Flash'
//import HazardImg from './Hazard.png'

export default connect({
		lat: state`position.latitude`,
		lon: state`position.longitude`,
		altd: state`position.altitude`,
		head: state`position.heading`,
		speed: state`position.speed`,		
	},
	function App({lat, lon, altd, head, speed}) {
		return (
			<View>
				<Flash>
						<Text style={s.header}>
										Slow Moving Vehicle
						</Text>
					<View style={s.vimg}>
						<Image style={s.myimg}
							source={require('./Hazard.png')}
						/>
					</View>
					<View style={s.tdisplay}>
						<Text style={s.lheader}>
							Latitude: {lat.toFixed(5)}
						</Text>

						<Text style={s.lheader}>
							Longitude: {lon.toFixed(5)}
						</Text>
						<Text style={s.lheader}>	
							Altitude: {altd.toFixed(5)}
						</Text>
						<Text style={s.lheader}>
							Speed: {speed.toFixed(5)}
						</Text>
						<Text style={s.lheader}>
							Heading: {head.toFixed(5)}
						</Text>
					</View>
					{/*	<div className={cx('container')}>
					<h1>Slow Moving Vehicle</h1>
					<img src={HazardImg} alt={"HAZARD"}/>

					<div className={cx('latLon')}>
						<div>
							<h1>Latitude:</h1>
							{lat}
						</div>
						<div>
							<h1>Longitude:</h1>
							{lon}
						</div>
					</div>
	</div>*/}
				</Flash>
			</View>
 		)
	}
);

const s = StyleSheet.create({
	header: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 50,
		color: 'black',
	},

	vimg:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	myimg: {
		flexShrink: 1,
		width: 150,
		height: 150,
	},
	
	lheader: {
		display: 'flex',
		flexDirection: 'column',
		fontWeight: 'bold',
		fontSize: 30,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
	},
	
	tdisplay: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
})
