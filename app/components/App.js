const React = require("react")
const Header = require("./Header")
const Popular = require("./Popular")

class App extends React.Component {
	render() {
		return (
            <div>
            <Header />
			<div className="container">
				<Popular />
			</div>
            </div>
		)
	}
}

module.exports = App