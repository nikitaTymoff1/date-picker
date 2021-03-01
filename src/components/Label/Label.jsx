import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from "./styled";

const Label = props => {
    return props.text  ?
     (
        <StyledLabel {...props}>
            {props.text}
        </StyledLabel>
    ): null
};

Label.propTypes = {
    text:PropTypes.string,
    onclick: PropTypes.func
};

export default Label;
