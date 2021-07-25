import { createTheme, responsiveFontSizes } from "@material-ui/core"

let theme = createTheme({
	palette: {
		primary: {
			main: "#30BE76",
		},
		secondary: {
			main: "#FFFFFF",
		},
	},
	overrides: {
		MuiButton: {
			label: {
				color: "#30BE76",
			},
		},
	},
})

theme = responsiveFontSizes(theme)

export default theme
