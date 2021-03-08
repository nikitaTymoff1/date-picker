// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import StyledLabel from "./styled";

const Label = (props) => (<StyledLabel {...props}>{props.text || 'YYYY-MM-DD'}</StyledLabel>)

Label.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Label;
