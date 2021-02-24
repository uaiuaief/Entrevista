import { Navbar } from "./Navbar";

const { Component } = require("react");

class Banner extends Component {
    render() {
        return (
            <section id="banner"
                style={{
                    backgroundImage: 'url(./images/banner_picture.png)',
                    backgroundSize: 'cover'
                }}>
                <Navbar></Navbar>
                <div className="section-inner">
                    <div className="arrows">
                        <img src='./images/left_arrow.png'></img>
                        <img className="right-arrow" src='./images/left_arrow.png'></img>
                    </div>
                    <div className="banner-text">
                        <h1>A segurança</h1>
                        <h1>da sua família</h1>
                        <h1>é <strong>nossa prioridade</strong></h1>
                    </div>
                </div>

            </section>
        )
    }
}

export { Banner }