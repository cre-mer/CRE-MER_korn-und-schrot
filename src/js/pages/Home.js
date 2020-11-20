/*
 * Import React dependencies
 */
import React, { lazy } from 'react';

/*
 * Import internal dependencies
 */
import FormDialog from '../components/FormDialog';
import Anmeldung from '../components/Anmeldung';
import Shop from '../components/Shop';
import Recipes from '../components/Recipes';
import ContactCTA from '../components/ContactCTA';
import Menu from '../components/Menu';
import { Container } from '@material-ui/core';

export default class Home extends React.Component {
	render() {
		return (
			<>
				<Menu
					title={
						<>Getreidemühle Korn und Schrot präsentiert
			      		<br className="xl:hidden"/>
			      		<span className="text-orange"> Die Mühlenbäcker</span></>
					}
					content={
						<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
			            	Gemeinsam zubereitete schmackhafte Semmeln und Gebäck mit frischen Zutaten aus unserer eigenen Mühle – ökologisch, regional und erschwinglich.
			        	</p>
					}
					cta={true}
				/>

				<Container>
				<div className="flex items-center m-2 mb-32 p-2 md:flex-row flex-col">
				<div className="w-1/2">
					<h2 className="text-2xl md:text-4xl">
						Worauf Sie sich
						<br className="xl:hidden"/>
						<span className="text-orange"> freuen</span> dürfen
					</h2>
					<p className="text-lg text-gray-700">
					Gemeinsam zubereitete schmackhafte Semmeln und Gebäck mit frischen Zutaten aus unserer eigenen Mühle – ökologisch, regional und erschwinglich.<br/>
					Sie erleben Spaß und Genuss beim gemeinsamen Backen und Schlemmen. Lassen Sie sich überraschen, welche/r Bäckermeister/in bei Ihrer Mühlenbäckerei die Anleitung übernimmt!<br/>
					Außerdem eröffnen Sie sich eine große Chance: Alle Teilnehmer der Mühlenbäckerei  können unsere Mehlsorten in einen Spezial-Angebot bestellen.<br/>
					Eingeladen zur Mühlenbäckerei sind: junge und junggebliebene ernährungsbewusste Hobbybäcker aus unserer Region Straubing.
					</p>
			  </div>
				<div className="pricing-plan-wrap text-center md:w-1/2 mr-6">
					<div className="pricing-plan rounded md:rounded-r-none">
					  <div className="pricing-header p-4 md:py-6">
								  <h4 className="text-2xl md:text-3xl">Unkostenbeitrag</h4>
								  <p className="text-gray-600 mb-4">Anmeldeschluss: 1. Oktober 2019</p>
								  <div className="text-4xl md:text-5xl leading-none">
									  <span className="text-sm align-top inline-block mt-2">EUR </span>20,–
								  </div>
								  <FormDialog form={ <Anmeldung /> } title="Anmeldung" />
							  </div>
							  <div className="pricing-features">
								  <ul>
									  <li className="text-gray-700 py-3">4 × in diesem Herbst</li>
									  <li className="text-gray-700 py-3">jeweils ab 14.30 Uhr</li>
								  </ul>
							  </div>
						</div>
					</div>
				</div>

					<ContactCTA />
					<Recipes />
				</Container>
			</>
		)
	}
}
