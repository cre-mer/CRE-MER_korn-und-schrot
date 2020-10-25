/*
 * Import React dependencies
 */
import React from 'react';

import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom";

export default class Impressum extends React.Component {
	render() {
		return (
			<>
				<Typography variant="h1" gutterBottom>
				Impressum
				</Typography>
				<Typography>
					Getreidemühle Korn und Schrot e.K.<br/>
 Susanne Miller
				</Typography>
				<Typography>
					Schanzlweg 37 94315<br/>
					Straubing
				</Typography>
				<Typography>
					Tel: <a rel="noopener norefferer" href="tel:0942112340">09421/12340</a><br/>
 Fax: 09421/12344
				</Typography>
				<Typography>
					<a rel="noopener norefferer" href="https://www.kornundschrot.de ">www.kornundschrot.de </a><br/>
					<a rel="noopener norefferer" href="mailto:kontakt@kornundschrot.de">kontakt@kornundschrot.de</a>
				</Typography>
				<Typography>
 Amtsgericht Straubing/Registersachen, XXX020101 <br/>
					Umsatzsteuer ID: DE787654
				</Typography>
			</>
		)
	}
}
