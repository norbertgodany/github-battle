const React = require("react")

class Header extends React.Component {
    render() {
        return (
            <section className="header">
                <div className="container">
                    <div className="logo">
                        <img src="./app/assets/icons/logo_github.svg"></img>
                        <h1>GitHub Ranking</h1>
                    </div>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">Battle</a>
                        <a href="#">Popular</a>
                    </nav>
                </div>
            </section>
        )
    }
}

module.exports = Header