/*
 * Import React dependencies
 */
import React from 'react';

/*
 * Import external dependencies
 */
import Component from 'fbo-react-lib';

/*
 * Import internal dependencies
 */
import FormDialog from '../components/FormDialog';
import Shop from '../components/Shop';

class ContactCTA extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="cta-2 bg-white border border-orange py-12 mt-24 mb-24 text-orange">
				<div className="container px-4 mx-auto">
					<div className="md:flex md:-mx-4 md:items-center xl:py-4">
						<div className="md:w-1/2 px-4">
							<div className="mb-2 text-3xl">Unsere besonderes Mehlsortiment für Sie</div>
						</div>
						<div className="md:w-1/2 px-4 sm:text-center mt-12 md:mt-0 text-4xl">
							<FormDialog form={ <Shop /> } title="Jetzt entdecken" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ContactCTA;
