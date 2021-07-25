import { makeStyles, TextField, Theme } from "@material-ui/core"
import clsx from "clsx"

enum Color {
	prim = "primary",
	second = "secondary",
}

interface Props {
	label: string
	className?: string
	color?: Color
	onChange: (text: string) => void
	type?: string
	value: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		borderColor: "white",
		color: "white",
		width: "100%",
	},
	label: {
		color: "white",
		fontFamily: "Open Sans Condensed",
		fontWeight: 500,
		letterSpacing: 1.5,
	},
	outlinedInput: {
		borderColor: `${theme.palette.secondary.main} !important`,
		color: "white",
	},
	notchedOutline: {
		borderWidth: "1px",
		borderColor: "white !important",
	},
}))

const UITextField = ({
	label,
	className,
	color,
	onChange,
	type,
	value,
}: Props) => {
	const classes = useStyles()
	if (!color) {
		color = Color.second
	}
	if (!type) {
		type = "text"
	}

	return (
		<TextField
			variant="outlined"
			label={label}
			InputLabelProps={{
				classes: {
					root: classes.label,
				},
			}}
			className={clsx(classes.root, className)}
			InputProps={{
				classes: {
					root: classes.outlinedInput,
					notchedOutline: classes.notchedOutline,
				},
			}}
			onChange={(e) => onChange(e.target.value)}
			color={color}
			type={type}
			value={value}
			inputProps={{
				autocomplete: "new-password",
				form: {
					autocomplete: "off",
				},
			}}
		/>
	)
}

export default UITextField
