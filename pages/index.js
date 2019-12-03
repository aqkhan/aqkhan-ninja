import React, { useEffect } from "react";
import Head from '../components/Head';
import '../static/style.css';
import Hero from '../components/Hero';
// import Navigation from '../components/Navigation';
import { initGA, logPageView } from '../utils/analytics';

export default function index() {

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true
        }
        logPageView()
    });

    return (
        <React.Fragment>
            <Head title="Chief Technology Officer" />
            <Hero imageUrl="/static/images/aqk_in_the_jungle.jpg" 
                children={
                    <>
                        <h2>Prelude</h2>
                        <p>I stand by one thing and one thing only and that's GSD (Getting S**t Done, prolly should trademark GSD). It may be the first time "we" are interacting and instead of pretending to be someone who I am not, I prefer to lay this right off the bat. I specialize in delivering results, not bullshit, not explanations, just good ol' results, period.</p>
                        <p>I started programming when I was in 3rd grade (I am almost 31 now -_-), unlike complex social norms, the binary nature of the computers always made more sense to me. In a way, I found peace when I was/am near a computer. Never thought that playing with computers will become my livelihood (glad how it all turned out).</p>
                        <p>The twist in this entire saga is I didn't turn out to be a stereotype geek, instead, for reasons that I won't bore you with, I turned out to be a badass, laser focused, gun slinging one-man tech army.</p>
                        <p>Now a days, you can find me barking orders at my team (if you think Gordan Ramsey was bad, you have another thing coming), teaching, coding, experimenting with the bleeding edge tech, playing snooker, cruising in heavily customized truck, getting in trouble for no good reason and assisting companies who are serious about making real progress.</p>
                        <h2>Epilogue</h2>
                        <p>The name's Arslan Khan but let's not get bogged down if you can't pronounce it. Call me "A" and <a href="https://www.upwork.com/fl/arslankhan">lets GSD.</a></p>
                    </>
                }
            />
        </React.Fragment>
    )
}