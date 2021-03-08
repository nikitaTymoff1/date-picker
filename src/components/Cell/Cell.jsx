// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import StyledP from "./styled";

const Cell = (props) => <StyledP {...props}>{props.children}</StyledP>;

Cell.propTypes = {
    IsDate: PropTypes.bool,
    onClick: PropTypes.func,
    'data-timestamp': PropTypes.number,
    isBetweenActive: PropTypes.bool,
    active: PropTypes.bool
};

export default Cell;
