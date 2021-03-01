import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from "./styled";
//
const IconButton = props => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
};
IconButton.propTypes = {
    size: PropTypes.string,
    onClick: PropTypes.func
};

export default IconButton;
