import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'
import {Alert, StyleSheet, View, Text, Button, Image} from 'react-native'
import App from '../App'

export default connect({
				screen: state`props.view`
		},

		function Open(){
				return(
					<View>
						<View style={s.vimg}>
							<Image style={s.myimg} 
								source={require('../App/Hazard.png')}
							/>
						</View>
						<Text style={s.header}>
							Slow Moving Vehicle
						</Text>
						<Button
								onPress = {goToApp}
								title="I am a SMV"
								color = "orange"
						/>
						<Button
								onPress = {goToApp}
								title="I am not a SMV"
								color = "orange"
						/>
					</View>
				)
		}
)

function goToApp(){
				screen.view("something")
				Alert.alert("WHAT ARE YOU DOING!!")
}
;


const s = StyleSheet.create({
				vimg:{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
								justifyContent: 'center'
				},

				myimg: {
					flexShrink: 1,
					width: 150,
					height: 150,
				},

				header: {
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 50,
					color: 'black',
				}

			}
)
