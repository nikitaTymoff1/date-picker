import './App.css';
import React from "react";
import DatePicker from './components/DatePicker/DatePicker'

function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <DatePicker type={'single'}/>
            <DatePicker type={'range'}/>
            <DatePicker type={'multi-range'}/>
        </div>
    );
}

export default App;
