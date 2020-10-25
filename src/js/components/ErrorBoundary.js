/*
 * Import React dependencies
 */
import React, { Suspense } from 'react';

import Skeleton from '@material-ui/lab/Skeleton';

export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		return {hasError: true};
	}

	render() {
		const { fallback = <Skeleton animation="wave" /> } = this.props;

		if (this.state.hasError) {
			return (
				<div className="alert alert-info" role="alert">
					<p className="text-center mb-0">
						Loading failed! Please <a href="#" onClick={() => window.location.reload(false)} className="alert-link">reload</a>.
					</p>
				</div>
			);
		}

		return (
			<Suspense fallback={fallback}>
				{this.props.children}
			</Suspense>
		)
	}
}
