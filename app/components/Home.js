const React = require("react")
const Link = require("react-router-dom").Link

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="grid-item">
          <h1>
            Battle your friends on GitHub
					</h1>
          <Link className="button" to="/battle">
            Battle Now
					</Link>
        </div>
        <p>Or ...</p>
        <div className="grid-item">
          <h1>
            View popular respositories on GitHub
					</h1>
          <Link className="button" to="/popular">
            View Repos
					</Link>
        </div>
      </div>
    )
  }
}

module.exports = Home;