const { Component } = require("react");

class Showcase extends Component {
    render() {
        return (
            <>
                <div className="showcase-section-1 gradient">
                    <div className="showcase-inner">
                        <h1 className="subtitle text-large">
                            Proteção para <strong>todos</strong>
                        </h1>
                        <div id="cards-top-half">
                            <div className="img-container">
                                <img src="/images/card_image.png"></img>
                            </div>
                            <div className="img-container">
                                <img src="/images/card_image.png"></img>
                            </div>
                            <div className="img-container">
                                <img src="/images/card_image.png"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showcase-section-2">
                    <div className="showcase-inner">
                        <div id="cards-bottom-half">
                            <div className="card-text">
                                <h2>Redes de proteção para crianças</h2>
                                <p>Tesla. Inc. (antigamente Tesla Motors. Inc.), é uma empresa automotiva e de armazenamento de energia norte</p>
                                <a href="#" className="see-more">
                                    Saiba Mais
                                    <img className="invert" src="/images/right_arrow.png"></img>
                                </a>
                            </div>
                            <div className="card-text selected">
                                <h2>Redes de proteção para idosos</h2>
                                <p>Tesla. Inc. (antigamente Tesla Motors. Inc.), é uma empresa automotiva e de armazenamento de energia norte</p>
                                <a href='#' className="see-more">
                                    Saiba Mais
                                    <img className="invert" src="/images/right_arrow.png"></img>
                                </a>
                            </div>
                            <div className="card-text">
                                <h2>Redes de proteção para animais</h2>
                                <p>Tesla. Inc. (antigamente Tesla Motors. Inc.), é uma empresa automotiva e de armazenamento de energia norte</p>
                                <a href="#" className="see-more">
                                    Saiba Mais
                                    <img className="invert" src="/images/right_arrow.png"></img>
                                </a>
                            </div>
                        </div>
                        <div className="text-large showcase-section-2-text">
                            <h1>Não basta ter</h1>
                            <h1><strong>segurança</strong>, tem</h1>
                            <h1>que ter <strong>confiança</strong></h1>
                        </div>

                        <div className="achievements flex">
                            <div className="flex-item">
                                <div className="icon-wrapper">
                                    <img className="c1" src="/images/light_icon.png"></img>
                                </div>
                                <h1>
                                    5.000
                                    <span>
                                        <img className="plus-icon" src="/images/plus_icon.png"></img>
                                    </span>
                                </h1>
                                <p>Projetos personalizados realizados </p>
                            </div>
                            <div className="flex-item">
                                <div className="icon-wrapper">
                                    <img className="c2" src="/images/grid_icon.png"></img>
                                </div>
                                <h1>
                                    25.000
                                    <span>
                                        <img className="plus-icon" src="/images/plus_icon.png"></img>
                                    </span>
                                </h1>
                                <p>Metros de telas instalados </p>
                            </div>
                            <div className="flex-item">
                                <div className="icon-wrapper">
                                    <img className="c3" src="/images/window_icon.png"></img>
                                </div>
                                <h1>
                                    10.000
                                    <span>
                                        <img className="plus-icon" src="/images/plus_icon.png"></img>
                                    </span>
                                </h1>
                                <p>Janelas protegidas </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="CTA"
                    style={{
                        backgroundImage: 'url(/images/secondary_banner.png)',
                        backgroundSize: 'cover'
                    }}>
                    <div className="CTA-inner">
                        <div className="text">
                            <h1>Fale com um</h1>
                            <h1><strong>especialista</strong></h1>
                            <div className="description">
                                <p>E descubra as melhores opções</p>
                                <p>para a sua necessidade</p>
                            </div>
                            <button>Falar <strong>agora</strong></button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export { Showcase }