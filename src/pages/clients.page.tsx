import { Grid, makeStyles, Theme, Typography } from "@material-ui/core"
import pubAvatar from "../assets/img/PublicAvatar.png"
import femAvatar from "../assets/img/FemaleAvatar.png"
import { useHistory } from "react-router-dom"
import UIAvatar from "../components/ui/UIAvatar"
import UIButton from "../components/ui/UIButton"

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "100vh",
		width: "100vw",
		backgroundColor: theme.palette.primary.light,
		padding: "2rem",
	},
	name: {
		fontWeight: 700,
		color: "white",
		textAlign: "center",
		margin: "1rem",
	},
}))

const ClientsPage = () => {
	const classes = useStyles()
	const router = useHistory()

	return (
		<Grid
			container
			direction="row"
			className={classes.root}
			justifyContent="center"
			alignItems="flex-start"
		>
			<Grid
				item
				direction="row"
				justifyContent="center"
				alignItems="center"
				container
				xs={12}
				onClick={() => router.push("/client/1")}
			>
				<Grid xs={12}>
					<UIAvatar img={pubAvatar} />
				</Grid>
				<Grid xs={12}>
					<Typography className={classes.name} variant="h5">
						John Doe
					</Typography>
				</Grid>
			</Grid>
			<Grid
				item
				direction="row"
				justifyContent="center"
				alignItems="center"
				container
				xs={12}
				onClick={() => router.push("/client/2")}
			>
				<Grid xs={12}>
					<UIAvatar img={femAvatar} />
				</Grid>
				<Grid xs={12}>
					<Typography className={classes.name} variant="h5">
						Karen Trippier
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={8}>
				<UIButton onClick={() => router.push("/client/new")} label="New" />
			</Grid>
		</Grid>
	)
}

export default ClientsPage
