import React from 'react';
import { makeStyles, Checkbox, TextField, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography, Grid, Radio, RadioGroup, FormControlLabel, FormGroup } from '@material-ui/core';

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
	return ['Name', 'Adresse', 'Kontakt', 'Mehlsortiment', 'Lieferadresse', 'Rechnungsadresse'];
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
			<FormGroup aria-label="Mehlsortiment" name="Mehlsortiment">
			<FormControlLabel control={<Checkbox name="checkedC" />} label="Mehlsortiment Back ma‘s  (Dinkeldunst, Weizenvollkorn, Roggen Type 815)" />
			 <FormControlLabel control={<Checkbox name="checkedD" />} label="Mehlsortiment Italiano  (Tipo 00, Weizen Type 2000, Hanfmehl) " />
			 <FormControlLabel control={<Checkbox name="checkedE" />} label="Mehlsortiment Christ Kindl (Weizen Type 550, Roggen Type 610, Hanfmehl)" />
			</FormGroup>
		</>;
	case 4:
		return <>
			<RadioGroup aria-label="Lieferadresse" name="Lieferadresse">
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Straße" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Hausnummer" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="PLZ" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Ort" /></Grid>
			</RadioGroup>
		</>;
	case 5:
		return <>
			<RadioGroup aria-label="Rechnungsadresse" name="Rechnungsadresse">
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Straße" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Hausnummer" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="PLZ" /></Grid>
			<Grid item><TextField required id="standard-required" label="Pflichtfeld" defaultValue="Ort" /></Grid>
			</RadioGroup>
		</>;
	default:
		return 'Unbekannter Schritt';
	}
}

export default function Anmeldung() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [accafool, setAccafool] = React.useState(1);
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
		<p>Ich möchte das Spezial-Angebot des Mehlsortiments in Anspruch nehmen.</p>
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
			Absenden
			</Button>
		</Paper>
		)}
	</form>
	);
}
