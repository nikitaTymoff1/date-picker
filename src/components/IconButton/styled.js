import styled from 'styled-components'


const StyledButton = styled.div`
    font-size: ${({size}) => size || '25px'};
    cursor: pointer;

`
export default StyledButton;
