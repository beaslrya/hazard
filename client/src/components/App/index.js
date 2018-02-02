import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

import Flash from '../Flash'
import HazardImg from './Hazard.png'

import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

export default connect({
		lat: state`position.latitude`,
		lon: state`position.longitude`,
	},
	function App({lat, lon}) {
		return (
			<Flash>
				<div className={cx('container')}>
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
				</div>
			</Flash>
 		)
	}
);
