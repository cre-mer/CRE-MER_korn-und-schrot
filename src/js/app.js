/*
 * Import React dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, useLocation, useParams } from "react-router-dom";

/*
 * Import internal dependencies
 */
import Menu from './components/Menu';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App () {
	return (
		<>
			<Router>
				<Menu />
				<Container maxWidth="lg">
					<Switch>
						<Route path="/?p=datenschutz" component={ Datenschutz } />
						<Route path="/?p=impressum" component={ Impressum } />
						<Route path="/" component={ Home } />
					</Switch>
				</Container>
			</Router>
		</>
	)
}

const images = document.getElementById('app');
if (app) { ReactDOM.render( <App />, app); };
