import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText ,DialogTitle } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <span aria-describedby={id} type="button" onClick={handleClick}>
        {props.buttonText}
      </span>
      <Popper id={id} open={open} anchorEl={anchorEl}>
			<Dialog fullWidth open={open} onClose={handleClick} aria-labelledby="form-dialog-title">
				<DialogContent>
					<Typography variant="h4" gutterBottom>
					{props.title}
					</Typography>
					{props.content}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClick} color="primary">
					Habe es verstanden!
					</Button>
				</DialogActions>
			</Dialog>
      </Popper>
    </div>
  );
}
