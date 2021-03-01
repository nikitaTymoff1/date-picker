import styled from "styled-components";

const DateLabel = styled.p`
font-size: 14px;
line-height: 30px;
        cursor:pointer;
`

const StyledRange = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({active}) => active ? '#e9204e' : 'white'};
    height: 30px;
    padding: 2px;
 
`
const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

export {Row,StyledRange,DateLabel}
