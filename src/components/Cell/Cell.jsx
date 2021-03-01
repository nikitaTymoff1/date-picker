import React from 'react';
import PropTypes from 'prop-types';
import StyledP from "./styled";

const Cell = props => {
    return (
        <StyledP {...props}>
            {props.children}
        </StyledP>
    );
};

Cell.propTypes = {
    date: PropTypes.bool,
    onClick: PropTypes.func,
    timestamp: PropTypes.number,
    isBetweenActive: PropTypes.bool,
    active: PropTypes.bool
};

export default Cell;
