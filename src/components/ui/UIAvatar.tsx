import { Avatar, makeStyles, Theme } from "@material-ui/core"
import clsx from "clsx"

interface Props {
	img?: string
	className?: string
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: "7rem",
		width: "7rem",
		marginLeft: "auto",
		marginRight: "auto",
	},
}))

const UIAvatar = ({ img, className }: Props) => {
	const classes = useStyles()

	return <Avatar src={img} className={clsx(classes.root, className)} />
}

export default UIAvatar
