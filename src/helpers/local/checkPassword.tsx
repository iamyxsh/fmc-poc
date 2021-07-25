interface Props {
	user: string
	pass: string
}

const checkPassword = ({ user, pass }: Props): boolean => {
	if (user === "admin" || pass === "admin") {
		return true
	} else {
		return false
	}
}

export default checkPassword
