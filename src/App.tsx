import React from 'react';
import InputDimension from './components/InputDimension';
import './style.css';

function App() {
    return (
        <div className="flex flex-col items-start">
            <p className="m-2 p-2 text-xl font-bold">Blocks dimension</p>
            <InputDimension/>
        </div>
    );
}

export default App;
