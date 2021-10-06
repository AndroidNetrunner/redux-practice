import React from 'react';
import './App.css';
import { Player } from './components/Player';
function App(): JSX.Element {
    return (
        <div className="App">
            <div className="row">
                <div className="col-sm-6">
                    <Player id={1} />
                    <Player id={2} />
                    <Player id={3} />
                </div>
                <div className="col-sm-6">
                    <Player id={4} />
                    <Player id={5} />
                    <Player id={6} />
                </div>
            </div>
        </div>
    );
}

export default App;
