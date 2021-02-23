const { Component } = require("react");

class Navbar extends Component {
    render() {
        return (
            <>
                <div id="navbar">
                    <div className="navbar-inner">
                        <div id='logo'>
                            <img src='/images/logo.png'></img>
                        </div>
                        <div id='nav-links'>
                            <a className="home-icon" href="#">
                                <img src='/images/home_icon.png'></img>
                            </a>
                            <a href="#"> Sobre Nós</a>
                            <a href="#"> Redes de Proteção </a>
                            <a href="#"> Serviços </a>
                            <a href="#"> Blog </a>
                            <a href="#"> Contato </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export { Navbar }