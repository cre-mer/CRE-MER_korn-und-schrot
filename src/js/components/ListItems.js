import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Checkbox, IconButton } from '@material-ui/core/';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function ListItems(props) {
	const { list } = props;
	const classes = useStyles();

	return (
	<List className={classes.root}>
		{list.map((value) => {

		return (
			<ListItem key={value} role={undefined} dense button>
				<ListItemText primary={value} />
			</ListItem>
		);
		})}
	</List>
	);
}
