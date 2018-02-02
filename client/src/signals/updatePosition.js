import {set} from 'cerebral/operators'
import {state, props} from 'cerebral/tags'

export default [
	set(state`position`, props`coords`),
	set(state`position.time`, props`timestamp`)
]
