import React from 'react';
import PropTypes from 'prop-types';
import Cell from "../Cell/Cell";
import IconButton from "../IconButton/IconButton";
import {SmallText, Wrapper, Row, Header, CellWrapper, HeaderIconButton, BigText, Footer} from "./styled";
import {HiOutlineX, HiChevronRight, HiChevronLeft, HiChevronDoubleRight, HiChevronDoubleLeft} from "react-icons/hi";

const shortDaysNames = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Su',
    'Sa'
];
const Calendar = props => {
    const {
        startDate,
        endDate,
        setYear,
        toggleMonth,
        year,
        monthName,
        pickDate,
        toggleShow,
        data
    } = props;
    const isBetweenActive = (timestamp) => {
        return timestamp > startDate && timestamp < endDate
    }
    return (
        <Wrapper type={props.type}>
            <Header>
                <Row>
                    <HeaderIconButton size={'25px'} onClick={() => setYear(year - 1)}><HiChevronDoubleLeft/></HeaderIconButton>
                    <BigText>{year}</BigText>
                    <HeaderIconButton size={'25px'} onClick={() => setYear(year + 1)}><HiChevronDoubleRight/></HeaderIconButton>
                </Row>
                <Row>
                    <IconButton size={'20px'} onClick={() => toggleMonth(-1)}><HiChevronLeft/></IconButton>
                    <SmallText>{monthName}</SmallText>
                    <IconButton size={'20px'} onClick={() => toggleMonth(1)}><HiChevronRight/></IconButton>
                </Row>
            </Header>
            <CellWrapper>
                {shortDaysNames.map(dayName => (<Cell key={dayName + 'lol'}>{dayName}</Cell>))}
                {data.map((day, index) =>
                    <Cell key={index}
                          isDate={true}
                          onClick={pickDate}
                          data-timestamp={day.timestamp}
                          isBetweenActive={isBetweenActive(day.timestamp)}
                          active={startDate === day.timestamp || endDate === day.timestamp}>
                        {day.day}
                    </Cell>)}
            </CellWrapper>
            <Footer>
                <IconButton size={'25px'} onClick={toggleShow}>
                    <HiOutlineX/>
                </IconButton>
            </Footer>

        </Wrapper>
    );
};

Calendar.propTypes = {
    startDate: PropTypes.number,
    endDate: PropTypes.number,
    setYear: PropTypes.func,
    toggleMonth: PropTypes.func,
    year: PropTypes.number,
    monthName: PropTypes.string,
    pickDate: PropTypes.func,
    toggleShow: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.number,
        day: PropTypes.number
    }))
};

export default Calendar;
