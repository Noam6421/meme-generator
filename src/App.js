import React from 'react';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator.js';

const App = () => {
    return(
        <div>
            <Header />
            <MemeGenerator />
        </div>
    );
};

export { App as default };
