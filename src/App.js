import './App.css';
import React, {useState} from "react";
import DatePicker from './components/DatePicker/DatePicker'
import Label from "./components/Label/Label";
import {Row,Col} from "./components/Calendar/styled";
import timestampToDate from "./api/helpers/timestampToDate";

function App() {
    const [singleDate, setSingleDate] = useState('')
    const [range, setRange] = useState({})
    const [rangeArr, setRangeArr] = useState([])
    return (
        <div style={{marginLeft:'30px'}}>
            <Row>
                <DatePicker type={'single'} onSelect={setSingleDate}/>
                <Label text={singleDate}/>
            </Row>
            <Row>
                <DatePicker type={'range'} onSelect={setRange}/>
                <Label text={range.startDate}/>
                <Label text={range.endDate}/>
            </Row>
            <Row>
                <DatePicker type={'multi-range'} onSelect={setRangeArr}/>
                <Col>
                    {rangeArr.map(range => {
                        return (
                            <Row key={Math.random()}>
                                <Label text={timestampToDate(range.startDate)}/>
                                <Label text={timestampToDate(range.endDate)}/>
                            </Row>
                        )
                    })}
                </Col>

            </Row>
            {/*<DatePicker type={'range'} onSelect={setRange}/>*/}
            {/*<DatePicker type={'multi-range'} onSelect={setRangeArr}/>*/}
            {/*<div>{JSON.stringify(range)}</div>*/}
            {/*<div>{JSON.stringify(rangeArr)}</div>*/}
        </div>
    );
}

export default App;
