import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

export class Skeletons extends React.Component {
	Card() {
		return (
			<Card>
				<CardHeader
				avatar={
					<Skeleton variant="circle" width={40} height={40} animation="wave"/>
				}
				title={ <Skeleton variant="text" width={200} animation="wave"/> }
				/>
				<CardContent>
					<Skeleton variant="rect" width={345} height={118} animation="wave"/>
				</CardContent>
			</Card>
		)
	}
}
