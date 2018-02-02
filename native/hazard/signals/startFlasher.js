import {debounce, toggle} from 'cerebral/operators'
import {state} from 'cerebral/tags'

function callFlashSig({controller}) {
	setTimeout(controller.getSignal('startFlasher'), 0);
}

export default [
	debounce(1000), {
		discard: [],
		continue: [
			toggle(state`flash.on`),
			callFlashSig
		]
	}
]
		
