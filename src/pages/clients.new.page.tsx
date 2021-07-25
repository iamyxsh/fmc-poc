import { Grid, makeStyles, TextField, Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom"
import UIButton from "../components/ui/UIButton"

const useStyles = makeStyles((theme: any) => ({
	root: {
		backgroundColor: theme.palette.secondary.light,
		height: "100vh",
		width: "100vw",
		padding: "2rem 1rem",
	},
	new: {
		fontSize: "7rem",
		color: theme.palette.primary.light,
	},
	field: {
		fontSize: "1.5rem",
		color: theme.palette.primary.light,
		fontWeight: "bolder",
	},
	btn: {
		backgroundColor: theme.palette.primary.light,
		margin: "auto",
		color: "white",
		width: "100%",
	},
	labelClass: {
		color: "white",
	},
	input: {
		fontSize: "1.5rem",
		color: "red",
	},
}))

const NewClientPage = () => {
	const classes = useStyles()
	const router = useHistory()

	return (
		<Grid
			container
			direction="row"
			justifyContent="flex-start"
			alignItems="flex-start"
			className={classes.root}
		>
			<Grid xs={12} item>
				<motion.div
					initial={{ x: 50 }}
					animate={{ x: 0 }}
					transition={{ duration: 1 }}
				>
					<Typography className={classes.new} variant="h4">
						New
					</Typography>
				</motion.div>
			</Grid>
			<Grid xs={12} direction="column" item>
				<Grid xs={2}>
					<Typography className={classes.field}>Name</Typography>
				</Grid>
				<Grid xs={10}>
					<TextField
						className={classes.input}
						fullWidth
						variant="standard"
						color="primary"
					/>
				</Grid>
			</Grid>
			<Grid xs={12} direction="column" item>
				<Grid xs={2}>
					<Typography className={classes.field}>Email</Typography>
				</Grid>
				<Grid xs={10}>
					<TextField
						classes={{
							root: classes.field,
						}}
						fullWidth
						variant="standard"
						color="primary"
						className={classes.input}
					/>
				</Grid>
			</Grid>
			<Grid xs={12} direction="column" item>
				<Grid xs={2}>
					<Typography className={classes.field}>Age</Typography>
				</Grid>
				<Grid xs={10}>
					<TextField
						InputProps={{
							type: "number",
						}}
						fullWidth
						variant="standard"
						color="primary"
						className={classes.input}
					/>
				</Grid>
			</Grid>
			<Grid xs={12} direction="column" item>
				<Grid xs={2}>
					<Typography className={classes.field}>Income</Typography>
				</Grid>
				<Grid xs={10}>
					<TextField
						InputProps={{
							type: "number",
						}}
						fullWidth
						variant="standard"
						color="primary"
						className={classes.input}
					/>
				</Grid>
			</Grid>
			<Grid item xs={8} style={{ margin: "auto" }}>
				<UIButton
					className={classes.btn}
					label="Save"
					onClick={() => router.push("/clients")}
					labelClass={classes.labelClass}
				/>
			</Grid>
		</Grid>
	)
}

export default NewClientPage
