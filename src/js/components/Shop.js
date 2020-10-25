import React from 'react';
import { makeStyles, TextField, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Grid, Radio, RadioGroup, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
	width: '100%',
	},
	button: {
	marginTop: theme.spacing(1),
	marginRight: theme.spacing(1),
	},
	actionsContainer: {
	marginBottom: theme.spacing(2),
	},
	resetContainer: {
	padding: theme.spacing(3),
	},
}));

function getSteps() {
	return ['Name', 'Adresse', 'Kontakt', 'Lieblingstermin für die Mühlenbäcker', 'Ersatztermin für die Mühlenbäcker'];
}

function getStepContent(step) {
	switch (step) {
	case 0:
		return <>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Name" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Vorname" /></Grid>
		</>;
	case 1:
		return <>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Straße" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Hausnummer" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="PLZ" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Ort" /></Grid>
		</>;
	case 2:
		return <>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="E-Mail" /></Grid>
			<Grid item><TextField id="standard" label="Optional" defaultValue="Telefon" /></Grid>
		</>;
	case 3:
		return <>
			<RadioGroup aria-label="Lieblingstermin für die Mühlenbäcker" name="lieblingstermin">
				<FormControlLabel value="Freitag, 25. Oktober 2019" control={<Radio color="primary"/>} label="Freitag, 25. Oktober 2019" />
				<FormControlLabel value=" Samstag, 26. Oktober 2019" control={<Radio color="primary"/>} label=" Samstag, 26. Oktober 2019" />
				<FormControlLabel value=" Freitag, 1. November 2019" control={<Radio color="primary"/>} label=" Freitag, 1. November 2019" />
				<FormControlLabel value=" Samstag, 2. November 2019" control={<Radio color="primary"/>} label=" Samstag, 2. November 2019" />
			</RadioGroup>
		</>;
	case 4:
		return <>
			<RadioGroup aria-label="Ersatztermin für die Mühlenbäcker" name="lieblingstermin">
				<FormControlLabel value="Freitag, 25. Oktober 2019" control={<Radio color="primary"/>} label="Freitag, 25. Oktober 2019" />
				<FormControlLabel value=" Samstag, 26. Oktober 2019" control={<Radio color="primary"/>} label=" Samstag, 26. Oktober 2019" />
				<FormControlLabel value=" Freitag, 1. November 2019" control={<Radio color="primary"/>} label=" Freitag, 1. November 2019" />
				<FormControlLabel value=" Samstag, 2. November 2019" control={<Radio color="primary"/>} label=" Samstag, 2. November 2019" />
			</RadioGroup>
		</>;
	default:
		return 'Unbekannter Schritt';
	}
}

export default function Anmeldung() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
	setActiveStep(0);
	};

	return (
	<form className={classes.root}>
		<Stepper activeStep={activeStep} orientation="vertical">
		{steps.map((label, index) => (
			<Step key={label}>
			<StepLabel>{label}</StepLabel>
			<StepContent>
				<Grid container spacing={2}>
					{getStepContent(index)}
				</Grid>
				<div className={classes.actionsContainer}>
					<div>
						<Button
						disabled={activeStep === 0}
						onClick={handleBack}
						className={classes.button}
						>
						Zurück
						</Button>
						<Button
						variant="contained"
						color="primary"
						onClick={handleNext}
						className={classes.button}
						>
						{activeStep === steps.length - 1 ? 'Fertig' : 'Weiter'}
						</Button>
					</div>
				</div>
			</StepContent>
			</Step>
		))}
		</Stepper>
		{activeStep === steps.length && (
		<Paper square elevation={0} className={classes.resetContainer}>
			<Typography>Sie haben das Formular erfolgreich erstellt.</Typography>
			<Button onClick={handleReset} className={classes.button}>
			Zurücksetzen
			</Button>
			<Button
			variant="contained"
			color="primary"
			onClick={handleNext}
			className={classes.button}
			>
			Senden
			</Button>
		</Paper>
		)}
	</form>
	);
}
