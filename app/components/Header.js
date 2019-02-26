const React = require("react")
const Link = require("react-router-dom").link
const NavLink = require("react-router-dom").NavLink

function Header () {
    return (
        <section className="header">
            <div className="container">
                <div className="logo">
                    <img src="./app/assets/icons/logo_github.svg"></img>
                    <h1>GitHub Ranking</h1>
                </div>
                <nav>
                    <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/battle">Battle</NavLink>
                    <NavLink className="nav-link" activeClassName="active" to="/popular">Popular</NavLink>
                </nav>
            </div>
        </section>
    )
}

module.exports = Header