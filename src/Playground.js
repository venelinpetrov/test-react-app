import React from 'react';
import Dropdown from './components/dropdown';

function Playground() {
    const sampleData = Array(8).fill().map((_, i) => ({ text: 'item' + i }));
    return (
        <div className="App">
            <Dropdown data={sampleData} dataTextField="text" />
        </div>
    );
}

export default Playground;
