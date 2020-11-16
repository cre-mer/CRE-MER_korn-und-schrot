/*
 * Import React dependencies
 */
import React from 'react';

/*
 * Import external dependencies
 */
import Component from 'fbo-react-lib';
import { Link } from "react-router-dom";

/*
 * Import internal dependencies
 */

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<footer className="my-auto w-full text-2xl bg-blue-300 bg-orange mt-32">
			<div className="container bg-grey-lighter p-8 mx-auto">
				<div className="flex flex-col mb-4 md:justify-between md:flex-row">
					<div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
						<div className="mb-2 text-white text-3xl">Kontakt und Info-Telefon</div>
						<div className="mt-4 flex">
							<p className="leading-normal">
								Stefan Miller<br/>
								Tel: <a className="text-white" href="tel:+49942112340">09421/12340</a><br/>
								<a className="text-white" href="mailto:muehlenbaecker@kornundschrot.de">muehlenbaecker@kornundschrot.de</a>
							</p>
						</div>
					</div>

					<div className="sm:w-1/4 h-auto">
					  <ul className="list-reset leading-normal text-white">
					  <li><Link to="/impressum">Impressum</Link></li>
					  <li><Link to="/datenschutz">Datenschutz</Link></li>
					  </ul>
				  </div>
			</div>
			</div>
			</footer>
		)
	}
}

export default Footer;
