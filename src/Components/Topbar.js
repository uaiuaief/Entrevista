const { Component } = require("react");


class Topbar extends Component {
    render() {
        return (
            <>
                <div id='topbar'>
                    <div className='leftside'>
                        <div className='inner'>
                            <span className="phone-number">
                                <img src='/images/tel_icon.png'></img>
                                41 99983929
                            </span>
                            <span className="phone-number">
                                <img src='/images/whatsapp_icon.png'></img>
                                41 99983929
                            </span>
                        </div>
                    </div>
                    <div className='rightside'>
                        <div className='inner'>
                            <a href='#'>
                                <img className='icon' src='/images/twitter_icon.png'></img>
                            </a>
                            <a href='#'>
                                <img className='icon black' src='/images/instagram_icon.png'></img>
                            </a>
                            <a href='#'>
                                <img className='icon' src='/images/facebook_icon.png'></img>
                            </a>
                            <a href='#'>
                                <img className='icon black' src='/images/linkedin_icon.png'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export { Topbar }