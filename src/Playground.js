import React from 'react';
import Dropdown from './components/dropdown';

function Playground() {
    const sampleData = Array(8).fill().map((_, i) => ({ text: 'item' + i }));
    const samplePrimitiveData = Array(8).fill().map((_, i) => i);
    return (
        <div className="App">
            <Dropdown data={sampleData} dataTextField="text" />
            <br/>
            <Dropdown data={samplePrimitiveData} valuePrimitive="true" />
        </div>
    );
}

export default Playground;
