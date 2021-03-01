import React from 'react';
import PropTypes from 'prop-types';
import {Row,StyledRange,DateLabel} from "./styled";
import timestampToDate from "../../api/helpers/timestampToDate";
import {HiMinus, HiOutlineX} from "react-icons/hi";
import IconButton from "../IconButton/IconButton";
import getYear from "../../api/helpers/getYear";
import getMonth from "../../api/helpers/getMonth";

const Range = props => {
    const {range,index,activeRange,setActiveRange,deleteRange} = props;
        return (
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
};

Range.propTypes = {
    range: PropTypes.object,
    index: PropTypes.number,
    activeRange: PropTypes.number,
    setActiveRange: PropTypes.func,
    deleteRange: PropTypes.func
};

export default Range;
