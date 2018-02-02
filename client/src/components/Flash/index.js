import React from 'react'
import {connect} from 'cerebral/react'
import {state} from 'cerebral/tags'

import classNames from 'classnames/bind';
import styles from './styles.css';

let cx = classNames.bind(styles);

export default connect({
		on: state`flash.on`
	},
	function Flash({children, on}) {
		return (
			<div className={cx({on})}>
				{children}
			</div>
 		)
	}
);
