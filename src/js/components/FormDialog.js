import React, { lazy } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText ,DialogTitle } from '@material-ui/core';

/*
 * Import internal dependencies
 */
import ErrorBoundary from './ErrorBoundary';

export default function FormDialog(props) {
	const { form, title } = props;
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
	setOpen(true);
	};

	const handleClose = () => {
	setOpen(false);
	};

	return (
	<div>
		<button className="border-2 border-solid border-orange hover:bg-orange text-orange hover:text-white rounded py-2 px-4 mt-6 mb-2 transition-colors duration-300" onClick={handleClickOpen}>
			{title}
		</button>
		<Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
		<DialogTitle id="form-dialog-title">{title}</DialogTitle>
		<DialogContent>
			<ErrorBoundary>
				{form}
			</ErrorBoundary>
		</DialogContent>
		<DialogActions>
			<Button onClick={handleClose} color="primary">
				Abbrechen
			</Button>
		</DialogActions>
		</Dialog>
	</div>
	);
}
