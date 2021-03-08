import React from 'react';
import PropTypes from 'prop-types';
import Range from "../Range/Range";


const RangeArray = props => {
    const {deleteRange,activeRange,setActiveRange,multiRange,showCalendar} = props
    if (multiRange.length && showCalendar)
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
};

RangeArray.propTypes = {
    deleteRange: PropTypes.func.isRequired,
    activeRange:PropTypes.number.isRequired,
    setActiveRange: PropTypes.func.isRequired,
    multiRange: PropTypes.arrayOf(PropTypes.shape({
        startDate: PropTypes.number.isRequired,
        endDate: PropTypes.number.isRequired
    })).isRequired,
    showCalendar: PropTypes.bool.isRequired
};

export default RangeArray;
