import React, { useEffect } from "react";
import Head from '../components/Head';
import '../static/style.css';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
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
            <Navigation />
            <Hero imageUrl="/static/images/aqk_in_the_jungle.jpg" />
        </React.Fragment>
    )
}