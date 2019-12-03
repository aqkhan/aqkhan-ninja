import React, { useEffect } from "react";
import { initGA, logPageView } from '../utils/analytics';

function Layout({children}) {

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true
        }
        logPageView()
    });

    return <div className="all-wrapper">
        {children}
    </div>
}

export default Layout;
