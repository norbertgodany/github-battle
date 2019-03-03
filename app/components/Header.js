const React = require("react")
const Link = require("react-router-dom").Link
const NavLink = require("react-router-dom").NavLink

const LogoImg = './app/assets/logo_github.svg'

function Header () {
    return (
        <section className="header">
            <div className="container">
                <div className="logo">
                <NavLink exact to="/">
                        <img src={LogoImg}/>
                        <h1>GitHub Ranking</h1>
                </NavLink>
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