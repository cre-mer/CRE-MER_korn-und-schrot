import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
	flexGrow: 1,
  },
  menuButton: {
	marginRight: theme.spacing(2),
  },
  title: {
	flexGrow: 1,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
	<div className={classes.root}>
	  <AppBar position="static">
		<Toolbar>
			<Typography variant="h6" className={classes.title}>
				<Link to="/"><Button color="secondary">Start</Button></Link>
			</Typography>
			<Link to="?p=impressum"><Button color="secondary">Impressum</Button></Link>
			<Link to="?p=datenschutz"><Button color="secondary">Datenschutz</Button></Link>
		</Toolbar>
	  </AppBar>
	</div>
  );
}
