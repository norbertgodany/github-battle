const React = require("react")
const ReactDOM = require('react-dom')
require("./index.css")

// state
// lifecycle
// UI

class App extends React.Component {
	render() {
		return (
			<div>
				Hello Norbert.Designer
			</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)