import React from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

export default connect({
		on: state`flash.on`
	},
	function Flash({children, on}) {
		return (
			<View style={on ? s.on : s.off}>
				{children}
			</View>
 		)
	}
);

const s = StyleSheet.create({
	on: {
		backgroundColor: 'orange',
		width:'100%',
		height: '100%'
	},

	off: {
		backgroundColor: 'white',
		width: '100%',
		height: '100%'
	}
})
