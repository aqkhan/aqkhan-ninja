export default function Hero(props) {
    let { imageUrl } = props;
    return (
        <div className="contentArea" style={{backgroundImage: "url("+imageUrl+")"}}>
            <div className="wrapperDiv">
                <div className="leftArea">
                    <div className="innerDiv content">
                        <h2>Prelude</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                <div className="rightArea">
                    <div className="content">
                        <h2>Prelude</h2>
                        <p>I stand by one thing and one thing only and that's GSD (Getting S**t Done, prolly should trademark GSD). It may be the first time "we" are interacting and instead of pretending to be someone who I am not, I prefer to lay this right off the bat. I specialize in delivering results, not bullshit, not explanations, just good ol' results, period.</p>
                        <p>I started programming when I was in 3rd grade (I am almost 31 now -_-), unlike complex social norms, the binary nature of the computers always made more sense to me. In a way, I found peace when I was/am near a computer. Never thought that playing with computers will become my livelihood (glad how it all turned out).</p>
                        <p>The twist in this entire saga is I didn't turn out to be a stereotype geek, instead, for reasons that I won't bore you with, I turned out to be a badass, laser focused, gun slinging one-man tech army.</p>
                        <p>Now a days, you can find me barking orders at my team (if you think Gordan Ramsey was bad, you have another thing coming), teaching, coding, experimenting with the bleeding edge tech, playing snooker, cruising in heavily customized truck, getting in trouble for no good reason and assisting companies who are serious about making real progress.</p>
                        <h2>Epilogue</h2>
                        <p>The name's Arslan Khan but let's not get bogged down if you can't pronounce it. Call me "A" and <a href="https://www.upwork.com/fl/arslankhan">lets GSD.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}