export default function Hero(props) {
    let { imageUrl, children } = props;
    return (
        <div className="contentArea" style={{backgroundImage: "url("+imageUrl+")"}}>
            <div className="wrapperDiv">
                {
                    children
                }
            </div>
        </div>
    )
}