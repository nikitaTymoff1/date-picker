import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: ${({type}) => type === 'multi-range' ? 'row' : 'column'};
  padding: 40px;
  max-height: 330px;
  color: black;
`
export {Wrapper};
