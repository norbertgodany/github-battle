const React = require("react");
const ReactRouter = require("react-router-dom");
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

const Header = require("./Header");
const Home = require("./Home");
const Popular = require("./Popular");
const Battle = require("./Battle");
const Results = require("./Results")

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
            		<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/battle" component={Battle} />
						<Route path="/battle/results" component={Results} />
						<Route path="/popular" component={Popular} />
						<Route render={function () {
							return (
								<div>
									<p>Page not found! Get back to the<a href="/">Home</a> page</p>
								</div>
							)
						}} />
					</Switch>
				</div>
				</div>
			</Router>
		)
	}
}

module.exports = App