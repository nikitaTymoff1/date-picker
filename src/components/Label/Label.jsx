import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from "./styled";

const Label = props => {
    return(
        <StyledLabel {...props}>
            {props.text || 'YYYY-MM-DD'}
        </StyledLabel>
    )
};

Label.propTypes = {
    text:PropTypes.string,
    onclick: PropTypes.func
};

export default Label;
