import styled from 'styled-components'

const StyledP = styled.p`
  min-width: 20px;
  min-height: 20px;
  font-size: 12px;
  font-weight: 300;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: white;
  //color: ${({isCurrentMonth}) => isCurrentMonth ? 'white' : 'grey'};
  margin: 5px;
  background-color: ${
          ({isBetweenActive, active}) => isBetweenActive ? 'rgba(233,32,78,0.5)' : active ? '#e9204e' : 'transparent'};

  &:hover {
    color: ${({isBetweenActive, active}) => isBetweenActive || active ? 'white' : '#e9204e'};;
  }
`

export default StyledP;
