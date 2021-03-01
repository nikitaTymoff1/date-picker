import React from 'react';
import PropTypes from 'prop-types';
import {Wrapper, RangeWrapper, Row} from "./styled";
import Label from "../Label/Label";
import {HiPlus} from "react-icons/hi";
import IconButton from "../IconButton/IconButton";
import Range from "../Range/Range";


const Header = props => {
    const {
        multiRange,
        setActiveRange,
        activeRange,
        deleteRange,
        toggleShow,
        startDate,
        endDate,
        showCalendar,
        type
    } = props
    const renderRanges = (multiRange) => {
        if (multiRange.length)
            return (
                <>
                    {multiRange.map((range, index) => {
                            return (
                                <Range
                                    key={range.startDate + range.endDate}
                                    range={range}
                                    index={index}
                                    setActiveRange={setActiveRange}
                                    activeRange={activeRange}
                                    deleteRange={deleteRange}
                                />
                            )
                        }
                    )}
                </>
            )
        else return <p>Pick a date</p>
    }

    const renderHeader = (type) => {
        switch (type) {
            case 'single':
                return (
                    <Row>
                        <Label onClick={toggleShow} text={startDate}/>
                    </Row>)
            case 'range':
                return (
                    <Row>
                        <Label onClick={toggleShow} text={startDate}/>
                        <Label onClick={toggleShow} text={endDate}/>
                    </Row>)
            case 'multi-range':
                return (
                    <Wrapper opened={showCalendar}>
                        <RangeWrapper>
                            {renderRanges(multiRange)}
                        </RangeWrapper>
                        {showCalendar
                            ? null
                            : <IconButton size={'25px'} onClick={toggleShow}><HiPlus/></IconButton>
                        }
                    </Wrapper>)
            default:
                break;
        }
    }
    return (
        <>
            {renderHeader(type)}
        </>
    );
};

Header.propTypes = {
    multiRange: PropTypes.arrayOf(PropTypes.shape({
        startDate: PropTypes.number,
        endDate: PropTypes.number
    })),
    setActiveRange: PropTypes.func,
    activeRange: PropTypes.number,
    deleteRange: PropTypes.func,
    toggleShow: PropTypes.func,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    showCalendar: PropTypes.bool,
    type: PropTypes.string

};

export default Header;
