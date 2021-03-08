// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';
import uuid from "react-uuid"

// Components
import Cell from "../Cell/Cell";
import IconButton from "../IconButton/IconButton";
import RangeArray from "../RangeArray/RangeArray";

// Styled
import {
    RangeContainerWrapper,
    RangeWrapper,
    SmallText,
    Wrapper,
    Row,
    Header,
    CellWrapper,
    HeaderIconButton,
    BigText,
    Footer, CalendarHeader, CalendarBody
} from "./styled";

// Icons
import {
    HiPlus,
    HiOutlineX,
    HiChevronRight,
    HiChevronLeft,
    HiChevronDoubleRight,
    HiChevronDoubleLeft
} from "react-icons/hi";

// Constants
const SHORT_DAY_NAMES = [
    'Mo',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Su',
    'Sa'
];
const Calendar =
    ({
         startDate,
         endDate,
         toggleYear,
         toggleMonth,
         year,
         monthName,
         pickDate,
         toggleShow,
         data,
         showCalendar,
         setActiveRange,
         activeRange,
         deleteRange,
         multiRange,
         type,
         month
     }) => {
        const isBetweenActive = (timestamp) => {
            return timestamp > startDate && timestamp < endDate
        }
        const isCurrentMonth = (timestamp) => {
            const date = new Date(timestamp)
            return date.getMonth() === month && date.getFullYear() === year
        }

        return (
            <Wrapper type={type}>
                {type === 'multi-range' && <div>
                    {multiRange &&
                    <RangeContainerWrapper opened={showCalendar}>
                        <RangeWrapper>
                            <RangeArray
                                multiRange={multiRange}
                                setActiveRange={setActiveRange}
                                activeRange={activeRange}
                                deleteRange={deleteRange}
                                showCalendar={showCalendar}
                            />
                        </RangeWrapper>
                        {!showCalendar && <IconButton size={'25px'} onClick={toggleShow}><HiPlus/></IconButton>
                        }
                    </RangeContainerWrapper>}
                </div>}

                <div>
                    <Header>
                        <Row>
                            <HeaderIconButton size={'25px'}
                                              onClick={() => toggleYear(-1)}><HiChevronDoubleLeft/></HeaderIconButton>
                            <BigText>{year}</BigText>
                            <HeaderIconButton size={'25px'}
                                              onClick={() => toggleYear(1)}><HiChevronDoubleRight/></HeaderIconButton>
                        </Row>
                        <Row>
                            <IconButton size={'20px'} onClick={() => toggleMonth(-1)}><HiChevronLeft/></IconButton>
                            <SmallText>{monthName}</SmallText>
                            <IconButton size={'20px'} onClick={() => toggleMonth(1)}><HiChevronRight/></IconButton>
                        </Row>
                    </Header>
                    <CellWrapper>
                        <CalendarHeader>
                            {SHORT_DAY_NAMES.map(dayName => (
                                <Cell isCurrentMonth={true}
                                      key={uuid()}>
                                    {dayName}
                                </Cell>
                            ))}
                        </CalendarHeader>
                        <CalendarBody>
                            {data.map((day, index) =>
                                <Cell key={uuid()}
                                      isDate={true}
                                      onClick={pickDate}
                                      data-timestamp={day.timestamp}
                                      isBetweenActive={isBetweenActive(day.timestamp)}
                                      isCurrentMonth={isCurrentMonth(day.timestamp)}
                                      active={startDate === day.timestamp || endDate === day.timestamp}>
                                    {day.day}
                                </Cell>)}
                        </CalendarBody>

                    </CellWrapper>
                    <Footer>
                        <IconButton size={'25px'} onClick={toggleShow}>
                            <HiOutlineX/>
                        </IconButton>
                    </Footer>
                </div>
            </Wrapper>
        );
    };

Calendar.propTypes = {
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    toggleYear: PropTypes.func.isRequired,
    toggleMonth: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
    monthName: PropTypes.string.isRequired,
    pickDate: PropTypes.func.isRequired,
    toggleShow: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.number.isRequired,
        day: PropTypes.number.isRequired,
    })).isRequired,
    multiRange: PropTypes.arrayOf(PropTypes.shape({
        startDate: PropTypes.number.isRequired,
        endDate: PropTypes.number.isRequired,
    })).isRequired,
    setActiveRange: PropTypes.func.isRequired,
    activeRange: PropTypes.number.isRequired,
    deleteRange: PropTypes.func.isRequired,
    showCalendar: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,

};

export default Calendar;
