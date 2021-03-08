// Absolute imports
import React from "react";
import PropTypes from "prop-types";

// Components
import Label from "../Label/Label";

// Styled
import { Row } from "./styled";

const mapText = {
    single: "pick a date",
    range: "pick a range",
    "multi-range": "add a range"
};

const Header = ({ toggleShow, type }) => (
    <Row>
        <Label onClick={toggleShow} text={mapText[type]} />
    </Row>
);

Header.propTypes = {
    toggleShow: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

export default Header;
