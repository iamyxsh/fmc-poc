import "./App.css"
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme/theme"
import MainRouter from "./main.router"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainRouter />
		</ThemeProvider>
	)
}

export default App
