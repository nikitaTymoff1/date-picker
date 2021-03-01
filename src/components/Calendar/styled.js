import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: Row;
    max-width:${({type}) => type === "multi-range" ? '450px' : '210px'};
    max-height: 310px;
    background-color: #3f3f3f;
    border-radius: 15px;
    padding: 20px 30px 10px;
`

const CellWrapper = styled.div`
      max-width: 220px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

`
const Header = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BigText = styled.div`
    font-size: 50px;
`
const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: white;
`
const Row = styled.div`
display: flex;
flex-direction: row;
text-align: center;
`
const Col = styled.div`
display: flex;
flex-direction: column;
`

const SmallText = styled.div`
    font-size: 15px;
`
const HeaderIconButton = styled.div`
padding-top: 22px;
font-size: 25px;
cursor: pointer;
&:hover{
color: #e9204e;
}
`
const RangeContainerWrapper = styled.div`
  font-family: Roboto, sans-serif;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  max-height: 260px;
  min-width: 230px;
  overflow: auto;
  align-items: center;
  background-color: #3f3f3f;
  min-height: 30px;
  color: white;
  //border-radius: ${({opened}) => opened ? '15px 0 0 15px' : '15px'};

  &::-webkit-scrollbar{
  display: none;
  }
`
const RangeWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

export {
    Col,
    RangeContainerWrapper,
    RangeWrapper,
    SmallText,
    CellWrapper,
    Row,
    Header,
    Wrapper,
    HeaderIconButton,
    BigText,
    Footer
};
