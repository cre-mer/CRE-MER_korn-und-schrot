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
				Datenschutz
				</Typography>
				<Typography variant="h2" gutterBottom>
					Datenschutzhinweise gemäß EU-Datenschutz-Grundverordnung (DSGVO)
				</Typography>
				<Typography>
					Wir setzen die seit dem 25. Mai 2018 geltende EU-Datenschutz-Grundverordnung (DSGVO) um, insbesondere, wenn es
					um die Verarbeitung Ihrer personenbezogenen Daten durch uns sowie um die Ihnen dabei zustehenden Rechte geht.
					Die Hinweise werden soweit erforderlich aktualisiert und sind im Detail nachlesbar unter: <Link to="#datenschutz">
					http://www.kornundschrot.de/datenschutz.php</Link>.
				</Typography>
			</>
		)
	}
}
