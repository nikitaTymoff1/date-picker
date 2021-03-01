import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {monthNames} from './monthNames'
import {Wrapper} from "./styled";
import timestampToDate from "../../api/helpers/timestampToDate";
import getNumberOfDays from "../../api/helpers/getNumberOfDays";
import Calendar from "../Calendar/Calendar";
import Header from "../Header/Header";
import isUniqRange from "../../api/helpers/isUniqRange";

const DatePicker = props => {
    let [startDate, setStartDate] = useState(0)
    let [endDate, setEndDate] = useState(0)
    let [showCalendar, setShowCalendar] = useState(false)
    let [year, setYear] = useState(0)
    let [month, setMonth] = useState(0)
    let [monthArray, setMonthArray] = useState([])
    let [multiRange, setMultiRange] = useState([])
    let [activeRange, setActiveRange] = useState(-1)

    const toggleShow = () => {
        if (showCalendar === true && props.type === 'multi-range' && (startDate && endDate)) {
            createNewRange()
            setStartDate(0)
            setEndDate(0)
        }
        setShowCalendar(!showCalendar)
    }
    const createMonth = (month, year) => {
        const firstDayInMonthIndex = (new Date(year, month)).getDay();
        const numberOfDays = getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 5;
        let cols = 7;

        for (let index = 0; index < rows * cols; index++) {
            let day = createDay({index, firstDayInMonthIndex, month, year, numberOfDays,})
            monthArray.push(day)
        }
        setMonthArray(monthArray)
    }
    const createDay = ({index, firstDayInMonthIndex, month, year, numberOfDays}) => {
        let prevMonth = month - 1;
        let prevYear = year;
        if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let nextMonth = month + 1;
        let nextYear = year;
        if (nextMonth > 12) {
            nextMonth = 0
            nextYear++;
        }

        let timestampYear = year;
        let timestampMonth = month;

        let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

        let day = index - firstDayInMonthIndex + 2
        if (day <= 0) {
            timestampYear = prevYear
            timestampMonth = prevMonth
            day = prevMonthNumberOfDays + day
        } else if (day > numberOfDays) {
            timestampYear = nextYear
            timestampMonth = nextMonth
            day = day - numberOfDays
        }
        let timestamp = new Date(timestampYear, timestampMonth, day).getTime();
        return {
            day: day,
            timestamp: timestamp,
        }
    }

    useEffect(() => {
        let date = new Date();
        setYear(date.getFullYear())
        setMonth(date.getMonth())
    }, [])

    useEffect(() => {
        createMonth(month, year)
    }, [month, year])

    const toggleMonth = (offset) => {
        let newMonth = month + offset;
        if (newMonth === -1) {
            setMonth(11);
            setYear(year - 1);
        } else if (newMonth === 12) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(newMonth)
        }
    }
    const createNewRange = () => {
        let newRange = {
            startDate: startDate,
            endDate: endDate
        }
        if (isUniqRange(multiRange, newRange)){
            setMultiRange([...multiRange, newRange])
            props.onSelect([...multiRange, newRange])
        }
    }

    const pickDate = (e) => {
        const timestamp = Number(e.target.dataset.timestamp)
        setActiveRange(-1)
        if (props.type === 'single') {
            props.onSelect(timestampToDate(timestamp))
            return setStartDate(timestamp)
        }
        if (!startDate) {
            setStartDate(timestamp)
        } else if (timestamp <= startDate) {
            setStartDate(timestamp)
        } else {
            setEndDate(timestamp)
            if (props.type === 'range')
                props.onSelect(
                    {
                        startDate: timestampToDate(startDate),
                        endDate: timestampToDate(timestamp)
                    })
        }
        if (startDate && endDate) {
            if (props.type === 'multi-range') {
                createNewRange()
            }
            setEndDate(0)
            setStartDate(timestamp)
        }
    }
    const changeActiveRange = (e) => {
        let index = e.target.parentNode.dataset.index;
        let activeYear = Number(e.target.parentNode.dataset.year);
        let activeMonth = Number(e.target.parentNode.dataset.month);
        if (!multiRange[index]) return
        const activeStartDate = multiRange[index].startDate;
        const activeEndDate = multiRange[index].endDate;
        setStartDate(activeStartDate);
        setEndDate(activeEndDate)
        setActiveRange(Number(index))
        setYear(activeYear)
        setMonth(activeMonth)
    }
    const deleteRange = (e) => {
        const index = e.target.parentNode.dataset.index;
        let multiRangeArr = (JSON.parse(JSON.stringify(multiRange)))
        multiRangeArr.splice(index, 1);
        setMultiRange(multiRangeArr)
        props.onSelect(multiRangeArr)
        setActiveRange(-1)
        setStartDate(0);
        setEndDate(0)
    }

    return (
        <Wrapper type={props.type}>
            <Header type={props.type} toggleShow={toggleShow}/>
            {showCalendar ?
                <Calendar
                    year={year}
                    monthName={monthNames[month]}
                    data={monthArray}
                    multiRange={multiRange}
                    deleteRange={deleteRange}
                    setActiveRange={changeActiveRange}
                    activeRange={activeRange}
                    showCalendar={showCalendar}
                    startDate={startDate}
                    endDate={endDate}
                    pickDate={pickDate}
                    toggleMonth={toggleMonth}
                    setYear={setYear}
                    toggleShow={toggleShow}
                    type={props.type}
                /> : null}
        </Wrapper>
    );
};

DatePicker.propTypes = {
    type: PropTypes.string
};

export default DatePicker;
