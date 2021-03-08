// Absolute i,ports
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'

// Components
import Range from "../Range/Range";

const RangeArray = ({deleteRange, activeRange, setActiveRange, multiRange, showCalendar}) => (
    multiRange.length && showCalendar
        ? <>
            {multiRange.map((range, index) => {
                    return (
                        <Range
                            key={uuid()}
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
        : <p>Pick a date</p>
)

RangeArray.propTypes = {
    deleteRange: PropTypes.func.isRequired,
    activeRange: PropTypes.number.isRequired,
    setActiveRange: PropTypes.func.isRequired,
    multiRange: PropTypes.arrayOf(PropTypes.shape({
        startDate: PropTypes.number.isRequired,
        endDate: PropTypes.number.isRequired
    })).isRequired,
    showCalendar: PropTypes.bool.isRequired
};

export default RangeArray;
