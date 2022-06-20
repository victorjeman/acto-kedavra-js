import styled from 'styled-components'

export const Hobby = ({ name }) => {
  return <HobbyStyled>{name}</HobbyStyled>
}

export const HobbyStyled = styled.span`
  background: #e5ebfe;
  line-height: 1.2;
  border-radius: 8px;
  padding: 5px 8px;
  color: #032596;
  font-size: 9px;
  display: inline-block;
`
