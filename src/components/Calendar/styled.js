import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    background-color: #3f3f3f;
    border-radius: ${({type}) => type === 'multi-range' ? '0 15px 15px 0' : '15px'};
    padding: 20px 30px 10px;
`

const CellWrapper = styled.div`
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

export {SmallText,CellWrapper,Row, Header, Wrapper, HeaderIconButton, BigText, Footer};
