import React from 'react'
import {render} from 'react-dom'
import {Container} from 'cerebral/react'
import controller from './controller'
import App from './components/App'

function Router(props) {
	if(props.screen === "main") {
					return (<Open />);
	} else {
					return (<Open />);
	}
}

render((
		<Container controller={controller}>
						<Router />
  </Container>
), document.querySelector('#app'))
