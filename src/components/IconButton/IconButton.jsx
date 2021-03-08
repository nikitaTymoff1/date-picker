// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Styled
import StyledButton from "./styled";

const IconButton = (props) => (<StyledButton {...props}>{props.children}</StyledButton>);

IconButton.propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func
};

export default IconButton;
