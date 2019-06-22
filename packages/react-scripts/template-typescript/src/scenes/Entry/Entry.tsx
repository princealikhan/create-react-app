import React from 'react';
// import logo from './static/images/realm-logo.svg';
import './styles/Entry.scss';

const Entry: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                {process.env.NODE_ENV}
                <h1>{process.env.REACT_APP_KEY}</h1>
                <h1>{process.env.NODE_PATH}</h1>

            </header>
        </div>
    );
}

export default Entry;
