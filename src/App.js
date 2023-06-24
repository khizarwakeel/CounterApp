import React, { useState } from 'react';
import './App.css';
import Message from './message';

function App() {
    let [count, setCount] = useState(0);
    let [isMorning, setMorning] = useState(true);
    return (
        <div className={isMorning ? 'morning' : 'night'}>
            <h2 className='counApp'>Counter App <br /><span className='goodMo'>Good {isMorning ? "Morning!" : "Night!"}</span></h2>
            <div className='content'>
                <Message myContent={count} morningData={isMorning} />
                <button className='btnClass' onClick={() => count > 0 ? setCount(--count) : setCount(0)}>Delete</button>
                <button className='btnClass' onClick={() => setCount(++count)}>Add</button>
            </div>
            <div>
                <button className='btnClass speBtn' onClick={() => setMorning(!isMorning)}>Change Time</button>
            </div>
        </div>
    )
}

export default App;