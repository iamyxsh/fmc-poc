import { Grid, makeStyles, Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import UIButton from "../components/ui/UIButton"
import UITextField from "../components/ui/UITextField"
import checkPassword from "../helpers/local/checkPassword"

const useStyles = makeStyles((theme: any) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		height: "100vh",
		width: "100vw",
	},
	welcomeContainer: {
		marginTop: "20%",
	},
	welcome: {
		fontWeight: 700,
		fontFamily: "Open Sans Condensed",
		fontSize: "4.5rem",
		textAlign: "center",
	},
	textFieldCont: {
		marginLeft: "auto",
		marginRight: "auto",
	},
	btn: {
		color: theme.palette.primary.main,
	},
}))

const HomePage = () => {
	const classes = useStyles()
	const router = useHistory()

	const [user, setUser] = useState("")
	const [pass, setPass] = useState("")

	const signIn = () => {
		if (checkPassword({ user, pass })) {
			router.push("/clients")
		}
	}

	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			className={classes.root}
		>
			<Grid xs={12} item className={classes.welcomeContainer}>
				<motion.div
					initial={{ y: 70, opacity: 0.7 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<Typography
						className={classes.welcome}
						color="secondary"
						variant="h2"
					>
						Welcome
					</Typography>
				</motion.div>
			</Grid>
			<Grid item xs={12} container spacing={4}>
				<Grid xs={10} className={classes.textFieldCont} item>
					<UITextField
						value={user}
						label="Username"
						onChange={(st) => setUser(st)}
					/>
				</Grid>
				<Grid xs={10} className={classes.textFieldCont} item>
					<UITextField
						value={pass}
						label="Password"
						onChange={(st) => setPass(st)}
						type="password"
					/>
				</Grid>
			</Grid>
			<Grid xs={8} item>
				<UIButton label={"Signin"} onClick={signIn} className={classes.btn} />
			</Grid>
		</Grid>
	)
}

export default HomePage
