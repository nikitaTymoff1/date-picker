import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: ${({type}) => type === 'multi-range' ? 'row' : 'column'};
  padding: 40px;
  max-height: 310px;
  color: black;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
`
const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const Col = styled.div`
display: flex;
flex-direction: column;
`
export {Wrapper, Header,Row,Col};
