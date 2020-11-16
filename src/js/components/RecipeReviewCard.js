import React, { lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Popper from '@material-ui/core/Popper';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import MoreVertIcon from '@material-ui/icons/MoreVert';

/*
 * Import internal dependencies
 */
const ListItems = lazy(() => import('./ListItems'));
import ErrorBoundary from './ErrorBoundary';
import SimplePopper from './SimplePopper';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
}));

export default function RecipeReviewCard(props) {
	const { title = "", avatar = "", subheader = "", excerpt = "", content = "", list = [], imgUrl = "leer", imgTitle = "leer" } = props;
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
	setExpanded(!expanded);
	};

	return (
	<Card className={classes.root}>
		<CardHeader
			avatar={
				<Avatar aria-label="recipe" className={classes.avatar}>
					{ avatar }
				</Avatar>
			}
			action={
				<IconButton aria-label="settings">
				<MoreVertIcon />
				</IconButton>
			}
			title={ title }
			subheader={ subheader }
		/>
		<CardMedia
			className={classes.media}
			image={imgUrl}
			title={imgTitle}
		/>
		<CardContent>
			<Typography variant="body2" color="textSecondary" component="p">
				{ excerpt }
			</Typography>
		</CardContent>
		<CardActions disableSpacing>
			<IconButton aria-label="add to favorites">
				<FavoriteIcon />
			</IconButton>
			<IconButton aria-label="share">
				<ShareIcon />
			</IconButton>
			<IconButton
				className={clsx(classes.expand, {
				[classes.expandOpen]: expanded,
				})}
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label="show more"
			>
				<SimplePopper buttonText={<AddIcon />} content="beidqhw" title="Zutaten: " content={
					<ErrorBoundary>
						<ListItems list={list}/>
					<Typography variant="h5" gutterBottom>
						Zubereitung:
					</Typography>
					{ content }
					</ErrorBoundary>
				}/>
			</IconButton>
		</CardActions>
		{/*<Collapse in={expanded} timeout="auto" unmountOnExit>
		<CardContent>
			<Typography variant="h5" gutterBottom>

			</Typography>
			<Typography variant="h5" gutterBottom>
				Zubereitung:
			</Typography>
			<Typography paragraph>
				{ content }
			</Typography>
		</CardContent>
		</Collapse>*/}
	</Card>
	);
}
