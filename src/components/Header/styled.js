import styled from "styled-components";

const Wrapper = styled.div`
  font-family: Roboto, sans-serif;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  max-height: 310px;
  min-width: 230px;
  overflow: auto;
  align-items: center;
  background-color: #3f3f3f;
  min-height: 30px;
  color: white;
  border-radius: ${({opened}) => opened ? '15px 0 0 15px' : '15px'};

  &::-webkit-scrollbar{
  display: none;
  }
`
const RangeWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export {Wrapper, RangeWrapper, Row}
