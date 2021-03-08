// Absolute imports
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

// Components
import Calendar from "../Calendar/Calendar";
import Header from "../Header/Header";

// Helpers
import monthNames from './monthNames'
import timestampToDate from "../../helpers/timestampToDate";
import getNumberOfDays from "../../helpers/getNumberOfDays";
import isUniqRange from "../../helpers/isUniqRange";
import changeMonth from "../../helpers/changeMonth";

// Styled
import {Wrapper} from "./styled";


const DatePicker = ({type, onSelect}) => {
    let [startDate, setStartDate] = useState(0)
    let [endDate, setEndDate] = useState(0)
    let [showCalendar, setShowCalendar] = useState(false)
    let [year, setYear] = useState(0)
    let [month, setMonth] = useState(0)
    let [monthArray, setMonthArray] = useState([])
    let [multiRange, setMultiRange] = useState([])
    let [activeRange, setActiveRange] = useState(-1)

    const toggleShow = () => {
        if (showCalendar === true && type === 'multi-range' && (startDate && endDate)) {
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
        for (let index = 0; index < 35; index++) {
            const day = createDay(
                {
                    index,
                    firstDayInMonthIndex,
                    month,
                    year,
                    numberOfDays,
                })
            monthArray.push(day)
        }
        setMonthArray(monthArray)
    }

    const createDay = ({index, firstDayInMonthIndex, month, year, numberOfDays}) => {
        const previousDate = changeMonth(month, year, -1)
        const nextDate = changeMonth(month, year, 1)

        const currentDayDate = {
            year: year,
            month: month,
        }

        const prevMonthNumberOfDays = getNumberOfDays(previousDate.year, previousDate.month);

        let currentDayNumber = index - firstDayInMonthIndex + 2

        if (currentDayNumber <= 0) {
            currentDayDate.year = previousDate.year
            currentDayDate.month = previousDate.month
            currentDayNumber = prevMonthNumberOfDays + currentDayNumber
        }
        else if (currentDayNumber > numberOfDays) {
            currentDayDate.year = nextDate.year
            currentDayDate.month = nextDate.month
            currentDayNumber = currentDayNumber - numberOfDays
        }

        const timestamp = new Date(currentDayDate.year, currentDayDate.month, currentDayNumber).getTime();
        return {
            day: currentDayNumber,
            timestamp: timestamp,
        }
    }

    useEffect(() => {
        let date = new Date();
        setYear(date.getFullYear())
        setMonth(date.getMonth())
        createMonth(date.getMonth(), date.getFullYear())
    }, [])

    const toggleMonth = (offset) => {
        const newDate = changeMonth(month, year, offset)
        setYear(newDate.year)
        setMonth(newDate.month)
        createMonth(newDate.month, newDate.year)
    }

    const toggleYear = (offset) => {
        setYear(year + offset)
        createMonth(month, year + offset)
    }

    const createNewRange = (dataPickerType = 'multi-range') => {
        if (dataPickerType !== 'multi-range') return
        const newRange = {
            startDate: startDate,
            endDate: endDate
        }
        if (isUniqRange(multiRange, newRange)) {
            setMultiRange([...multiRange, newRange])
            returnDate(type, newRange)
        }
    }
    const returnDate = (dataPickerType, range, timestamp) => {

        switch (dataPickerType) {
            case 'single':
                return onSelect(timestampToDate(timestamp))

            case 'range':
                return onSelect(
                    {
                        startDate: timestampToDate(startDate),
                        endDate: timestampToDate(timestamp)
                    })

            case 'multi-range':
                return range && onSelect([...multiRange, range])

            default:
                break;
        }
    }

    const pickDate = (e) => {
        const timestamp = Number(e.target.dataset.timestamp)
        setActiveRange(-1)

        if (type === 'single') {
            returnDate(type, null, timestamp)
            return setStartDate(timestamp)
        }

        if (!startDate) {
            return setStartDate(timestamp)
        }

        if (timestamp <= startDate) {
            return setStartDate(timestamp)
        } else {
            setEndDate(timestamp)
            returnDate(type, null, timestamp)
        }
        if (startDate && endDate) {
            createNewRange(type)
            setEndDate(0)
            setStartDate(timestamp)
        }
    }
    const changeActiveRange = (e) => {
        const {dataset} = e.target.parentNode
        const index = dataset.index;
        const activeYear = Number(dataset.year);
        const activeMonth = Number(dataset.month);

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
        const multiRangeArr = (JSON.parse(JSON.stringify(multiRange)))

        multiRangeArr.splice(index, 1);
        setMultiRange(multiRangeArr)

        onSelect(multiRangeArr)

        setActiveRange(-1)
        setStartDate(0);
        setEndDate(0)
    }

    return (
        <Wrapper type={type}>
            <Header type={type} toggleShow={toggleShow}/>
            {showCalendar &&
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
                toggleYear={toggleYear}
                toggleShow={toggleShow}
                type={type}
                month={month}
            />}
        </Wrapper>
    );
};


DatePicker.defaultProps = {
    type: 'single'
}

DatePicker.propTypes = {
    type: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default DatePicker;