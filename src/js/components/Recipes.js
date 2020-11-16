import React, { lazy } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Skeletons } from './Skeletons';

/*
 * Import internal dependencies
 */
const RecipeReviewCard = lazy(() => import('./RecipeReviewCard'));
import ErrorBoundary from './ErrorBoundary';

export default class Recipes extends React.Component {
	render(){
		return (
			<>
				<Typography variant="h2" gutterBottom>
					Rezepte zum „Aufwärmen“
				</Typography>
				<ErrorBoundary fallback={
					<Grid container direction="row" justify="space-between" alignItems="center">
						{ Array.apply(null, { length: 3 }).map((e, i) => (
									<Grid item key={i}/>
							))
						}
					</Grid>
				}>
					<Grid container direction="row" justify="space-between" alignItems="center" spacing={8}>
						<Grid item>
							<RecipeReviewCard
							title="Weizen-Dinkel-Semmeln"
							excerpt="Alle Zutaten bis auf die Hefe mischen. Die Hefe im warmen Wasser auflösen und dazugeben. Den Teig zwei bis drei Minuten gut durchkneten…"
							avatar="W"
							subheader=""
							content="Alle Zutaten bis auf die Hefe mischen. Die Hefe im warmen Wasser auflösen und dazugeben. Den Teig zwei bis drei Minuten gut durchkneten. Zu einem Ballen formen und 20 Minuten bei 25 Grad in einer zugedeckten Schüssel aufgehen lassen. Danach zwölf Teile des Teigs zu Semmeln rollen. Auf ein Backblech setzen, abdecken, weitere 30 Minuten ruhen lassen. Mit einem scharfen Küchenmesser jede Teigrolle einkerben. Den Backofen auf 230 Grad vorheizen. In die Fettpfanne des Backofens gut 200 ml heißes Wasser gießen, das Blech mit den Semmeln in den Ofen schieben und 25 Minuten backen. (Vor dem Backen kann man die Teigrollen auch mit Sonnenblumen- oder Kürbiskernen, mit Kümmel oder Mohn bestreuen.)"
							list={['250 g Weizenvollkornmehl ', '250 g Dinkelvollkornmehl ', '5 g Zucker ', '5 g Butter ', '10 g Salz ', '1 Päckchen Trockenhefe ', '300 ml warmes Wasser']}
							imgUrl="/src/img/semmel.jpg"
							imgTitle="Weizen-Dinkel-Semmeln"
							/>
						</Grid>
						<Grid item>
							<RecipeReviewCard
							title="Käsegebäck"
							excerpt="Mehl, Käse und kalte Butterstücke schnell verkneten und eine halbe Stunde kühl stellen. Danach den Teig nach und nach auf einer bemehlten…"
							avatar="K"
							subheader=""
							content=" Mehl, Käse und kalte Butterstücke schnell verkneten und eine halbe Stunde kühl stellen. Danach den Teig nach und nach auf einer bemehlten Platte ausrollen und beliebige Formen ausstechen. Eigelb und Milch verrühren, die Teile damit bestreichen, mit Kümmel oder Paprika bestreuen. Bei 180 Grad auf mittlerer Schiene eine gute Viertelstunde backen und auf dem Blech auskühlen lassen."
							list={['200 g Emmentaler (gerieben)', ' 200 g Butter ', '250 g Weizenvollkornmehl ', '½ TL Salz ', '2 Eigelb ', '2 TL Milch', ' Kümmel Paprika']}
							imgUrl="/src/img/kaesegebaeck.jpg"
							imgTitle="Käsegebäck"
							/>
						</Grid>
						<Grid item>
							<RecipeReviewCard
							title="Sesamkugeln"
							excerpt="Sesam rösten, mit Butter und Honig verrühren, die Gewürze und das Mehl hinzufügen. Den Teig etwa eine Stunde kühl stellen. Danach walnussgroße…"
							avatar="S"
							subheader=""
							content="Sesam rösten, mit Butter und Honig verrühren, die Gewürze und das Mehl hinzufügen. Den Teig etwa eine Stunde kühl stellen. Danach walnussgroße Kugeln formen, in die Mitte eine Mandel drücken und auf dem Backblech etwa zehn Minuten bei 210 Grad auf mittlerer Schiene backen."
							list={['180 g Weizenvollkornmehl ', '180 g Butter ', '120 g Sesam ', '120 g Honig ', 'Zimt, Vanille, Salz, Nelken, Mandeln']}
							imgUrl="/src/img/sesamkugeln.jpg"
							imgTitle="Sesamkugeln"
							/>
						</Grid>
					</Grid>
				</ErrorBoundary>
			</>
		)
	}
}
