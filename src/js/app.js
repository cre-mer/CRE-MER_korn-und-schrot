/*
 * Import React dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, useLocation, useParams } from "react-router-dom";

/*
 * Import internal dependencies
 */
import Footer from './components/Footer';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App () {
	return (
		<>
			<Router basename="/" hashType="noslash">
				<div>
					<Switch>
						<Route path="/datenschutz" component={ Datenschutz } />
						<Route path="/impressum" component={ Impressum } />
						<Route path="/" component={ Home } />
					</Switch>
				</div>
				<Footer/>
			</Router>
		</>
	)
}

const images = document.getElementById('app');
if (app) { ReactDOM.render( <App />, app); };
