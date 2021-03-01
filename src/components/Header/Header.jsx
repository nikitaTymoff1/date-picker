import React from 'react';
import PropTypes from 'prop-types';
import {Row} from "./styled";
import Label from "../Label/Label";

const Header = props => {
    const {toggleShow, type} = props
    let text = type === 'single' ? 'pick a date' : type === 'range' ? 'pick a range' : 'add a range'
    return (
        <Row>
            <Label onClick={toggleShow} text={text}/>
        </Row>
    );
};

Header.propTypes = {
    toggleShow: PropTypes.func,
    type: PropTypes.string
};

export default Header;
