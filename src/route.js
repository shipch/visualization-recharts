import React from 'react'
import {
	Router,
	Route,
	IndexRoute,
	browserHistory
} from 'react-router'
import App from './component/App'
import Dashboard from './component/Dashboard'
import About from './component/About'
import Home from './component/Home'


export default () => (
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Dashboard} />
			<Route path='about' component={About} />
			<Route path='dashboard' component={Dashboard} />
		</Route>
	</Router>
)