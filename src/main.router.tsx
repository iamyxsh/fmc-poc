import { BrowserRouter, Route, Switch } from "react-router-dom"
import ClientPage from "./pages/client.page"
import NewClientPage from "./pages/clients.new.page"
import ClientsPage from "./pages/clients.page"
import HomePage from "./pages/home.page"

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/clients" component={ClientsPage} />
				<Route exact path="/client/new" component={NewClientPage} />
				<Route exact path="/client/:id" component={ClientPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default MainRouter
