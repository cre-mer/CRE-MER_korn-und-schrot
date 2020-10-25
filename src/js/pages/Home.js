/*
 * Import React dependencies
 */
import React, { lazy } from 'react';

/*
 * Import internal dependencies
 */
import FormDialog from '../components/FormDialog';
import Hamsterwheel from '../components/Hamsterwheel';
const Anmeldung = lazy(() => import('../components/Anmeldung'));
const Shop = lazy(() => import('../components/Shop'));
import Recipes from '../components/Recipes';

export default class Home extends React.Component {
	render() {
		return (
			<>
				<FormDialog form={ <Anmeldung /> } title="Anmeldung" />
				<FormDialog form={ <Shop /> } title="Unsere besonderes Mehlsortiment für Sie" />
				<Hamsterwheel content={ <Recipes /> } />
			</>
		)
	}
}
