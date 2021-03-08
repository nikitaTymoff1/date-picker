// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import IconButton from "../IconButton/IconButton";

// Helpers
import getYear from "../../helpers/getYear";
import getMonth from "../../helpers/getMonth";
import timestampToDate from "../../helpers/timestampToDate";

// Styled
import {Row, StyledRange, DateLabel} from "./styled";

// Icons
import {HiMinus, HiOutlineX} from "react-icons/hi";

const Range = ({range, index, activeRange, setActiveRange, deleteRange}) => (
    <Row>
        <StyledRange active={index === activeRange}
                     data-index={index}
                     data-year={getYear(range.startDate)}
                     data-month={getMonth(range.startDate)}
                     onClick={setActiveRange}>
            <DateLabel>{timestampToDate(range.startDate)}</DateLabel>
            <HiMinus/>
            <DateLabel>{timestampToDate(range.endDate)}</DateLabel>
        </StyledRange>
        <IconButton size={'18px'} data-index={index} onClick={deleteRange}>
            <HiOutlineX data-index={index}/>
        </IconButton>
    </Row>
);

Range.propTypes = {
    range: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    activeRange: PropTypes.number.isRequired,
    setActiveRange: PropTypes.func.isRequired,
    deleteRange: PropTypes.func.isRequired
};

export default Range;
