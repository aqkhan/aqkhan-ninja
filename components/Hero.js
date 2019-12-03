import Navigation from '../components/Navigation';

export default function Hero(props) {
    let { imageUrl, children } = props;
    return (
        <div className="contentArea" style={{backgroundImage: "url("+imageUrl+")"}}>
            <div className="wrapperDiv">
                    <div className="leftArea"/>
                        <div className="rightArea">
                            <div className="content">
                                <Navigation />
                                    {
                                        children
                                    }
                            </div>
                    </div>
            </div>
        </div>
    )
}