import styled from 'styled-components'

const Wrapper = styled.div`
  display: inline-block;
  flex-direction: ${({type}) => type === 'multi-range' ? 'row' : 'column'};
  max-height: 330px;
  color: black;
`
export {Wrapper};
