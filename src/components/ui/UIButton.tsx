import { Button, Theme, makeStyles, Typography } from "@material-ui/core"
import clsx from "clsx"

interface Props {
	label: string
	onClick: () => void
	className?: string
	labelClass?: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		margin: "auto",
	},
	label: {
		color: theme.palette.primary.main,
		fontWeight: 700,
	},
}))

const UIButton = ({ label, onClick, className, labelClass }: Props) => {
	const classes = useStyles()

	return (
		<Button
			variant="contained"
			className={clsx(classes.root, className)}
			onClick={onClick}
			color="secondary"
		>
			<Typography className={clsx(classes.label, labelClass)}>
				{label}
			</Typography>
		</Button>
	)
}

export default UIButton
