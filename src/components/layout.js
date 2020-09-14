import React from 'react';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import './layout.css';

// fontawesomeのCSSを先読みする設定
import '@fortawesome/fontawesome-svg-core/styles.css';
// fontawesomeのコンポーネント内でCSSを適用しないようにする設定
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false


const Layout = ({ children }) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>

    )
}

export default Layout
